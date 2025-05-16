"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/lib/auth";
import { useState } from "react";

export default function AccountDeleteButton() {
    const [deleting, setIsDeleting] = useState(false)

    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <Button variant="destructive">
                    <span>Delete Account</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. Your account and all related data will be permanently deleted.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex justify-between gap-4">
                    <AlertDialogCancel disabled={deleting} className="min-w-[100px]">
                            Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={deleteUser} className="bg-red-600 hover:bg-red-700 min-w-[100px] text-white">
                        {deleting ? "Deleting..." : "Yes, Delete it"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
