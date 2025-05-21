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
import { ArrowLeft } from "lucide-react";

export default function DeleteSurvey() {
  const [questionOne, setQuestionOne] = useState<string | undefined>();
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-center bg-secondary pt-16 h-screen">
      <Card className="w-2/5 max-w-[800px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            User Satisfaction Survey
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <Label className="block mb-6 font-semibold text-xl">
                What is the reason you decided to leave jamAI?
              </Label>
              <RadioGroup className="gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={questionOne === "no-need"}
                    onClick={() => setQuestionOne("no-need")}
                    value={"no-need"}
                  />
                  <Label
                    className="cursor-pointer"
                    onClick={() => setQuestionOne("no-need")}
                  >
                    I no longer need the service
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={questionOne === "better-alternative"}
                    onClick={() => setQuestionOne("better-alternative")}
                    value={"better-alternative"}
                  />
                  <Label
                    className="cursor-pointer"
                    onClick={() => setQuestionOne("better-alternative")}
                  >
                    I found a better alternative
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={questionOne === "too-expensive"}
                    onClick={() => setQuestionOne("too-expensive")}
                    value={"too-expensive"}
                  />
                  <Label
                    className="cursor-pointer"
                    onClick={() => setQuestionOne("too-expensive")}
                  >
                    It is too expensive
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={questionOne === "privacy-concern"}
                    onClick={() => setQuestionOne("privacy-concern")}
                    value={"privacy-concern"}
                  />
                  <Label
                    className="cursor-pointer"
                    onClick={() => setQuestionOne("privacy-concern")}
                  >
                    Privacy or data concerns
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={questionOne === "not-helpful"}
                    onClick={() => setQuestionOne("not-helpful")}
                    value={"not-helpful"}
                  />
                  <Label
                    className="cursor-pointer"
                    onClick={() => setQuestionOne("not-helpful")}
                  >
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
              <ArrowLeft />
              <span>I&apos;ll give it another try</span>
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
