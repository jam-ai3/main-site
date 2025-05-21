"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import AccountDeleteButton from "../_components/account-delete-button";
import MotionButtonAccount from "../_components/motion-button-account";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

export default function DeleteSurvey() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [questionOne, setQuestionOne] = useState<string | undefined>();
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <div className="flex h-screen justify-center bg-gray-50">
      <Card className="w-full max-w-lg shodow-md">
        <CardHeader>
          <CardTitle className="text-2xl">User Satisfaction Survey</CardTitle>
        </CardHeader>

        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block text-xl font-semibold">
                {" "}
                What is the reason you decided to leave jamAI?
              </Label>
              <RadioGroup className="gap-4 mt-2">
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem
                    checked={questionOne === "no-need"}
                    onClick={() => setQuestionOne("no-need")}
                    value={"no-need"}
                  />
                  <Label className="text-lg">
                    I no longer need the service
                  </Label>
                </div>

                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem
                    checked={questionOne === "better-alternative"}
                    onClick={() => setQuestionOne("better-alternative")}
                    value={"better-alternative"}
                  />
                  <Label className="text-lg">
                    I found a better alternative
                  </Label>
                </div>

                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem
                    checked={questionOne === "too-expensive"}
                    onClick={() => setQuestionOne("too-expensive")}
                    value={"too-expensive"}
                  />
                  <Label className="text-lg">It is too expensive</Label>
                </div>

                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem
                    checked={questionOne === "privacy-concern"}
                    onClick={() => setQuestionOne("privacy-concern")}
                    value={"privacy-concern"}
                  />
                  <Label className="text-lg">Privacy or data concerns</Label>
                </div>

                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem
                    checked={questionOne === "not-helpful"}
                    onClick={() => setQuestionOne("not-helpful")}
                    value={"not-helpful"}
                  />
                  <Label className="text-lg">
                    Did not find it helpful or effective
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Textarea
                placeholder="Anything you like to share with us?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <div className="flex gap-4 w-full">
            <MotionButtonAccount
              className="flex-1"
              onClick={() => {
                router.push("/");
              }}
            >
              {" "}
              I'll give it another try
            </MotionButtonAccount>
            <AccountDeleteButton
              questionOne={questionOne || ""}
              message={message}
              className="flex-1"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
