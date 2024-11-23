"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { questionsData, Question } from "@/data/data";
import Image from "next/image";
import { toast } from "sonner";

const QUESTIONS_PER_PAGE = 5;

export default function Page() {
  const [questions, setQuestions] = useState<Question[]>(questionsData);
  const [currentPage, setCurrentPage] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const currentPageQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  const handleSliderChange = (id: number, value: number[]) => {
    const updatedQuestions = [...questions];
    const index = questions.findIndex((q) => q.id === id);
    updatedQuestions[index].value = value[0];
    setQuestions(updatedQuestions);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(questions.length / QUESTIONS_PER_PAGE) - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Survey responses:", questions);
    toast("Survey submitted!", {
      description: "Thanks for taking the survey!",
      duration: 8000,
    });
    resetForm();
  };

  const cancelSubmit = () => {
    toast("Survey cancelled!", {
      description: "Thank you for visiting! Have a nice day.",
      duration: 8000,
    });
    resetForm();
  };

  const resetForm = () => {
    setQuestions(questionsData);
    setCurrentPage(0);
    setShowSummary(false);
  };

  return (
    <div className="p-4 md:p-12 relative">
      <Image
        src="/resume.svg"
        alt="form"
        width={1000}
        height={1000}
        className="absolute -right-10 top-10 -z-10 w-[40%] opacity-10"
      />
      <Image
        src="/reservation.svg"
        alt="form"
        width={1000}
        height={1000}
        className="absolute -left-10 bottom-10 -z-10 w-[40%] opacity-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}>
        <Card className="md:p-6 p-2 w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-background">
              Your Smoking Journey: Insight and Evaluation
            </CardTitle>
            <CardDescription>
              Help us assess your smoking habits and provide personalized
              guidance for better health.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showSummary ? (
              <div className="space-y-6">
                <Progress
                  value={
                    ((currentPage + 1) /
                      Math.ceil(questions.length / QUESTIONS_PER_PAGE)) *
                    100
                  }
                  className="w-full"
                />
                <div className="text-sm text-center text-muted-foreground">
                  Page {currentPage + 1} of&nbsp;
                  {Math.ceil(questions.length / QUESTIONS_PER_PAGE)}
                </div>
                {currentPageQuestions.map((question) => (
                  <div key={question.id} className="space-y-2">
                    <Label
                      htmlFor={`question-${question.id}`}
                      className="sm:text-lg font-medium text-background">
                      {question.text}
                    </Label>
                    <Slider
                      id={`question-${question.id}`}
                      min={0}
                      max={4}
                      step={1}
                      value={[question.value]}
                      onValueChange={(value) =>
                        handleSliderChange(question.id, value)
                      }
                    />
                    <div className="grid gap-1 grid-cols-5 text-xs sm:text-sm text-muted-foreground">
                      {question.labels.map((label, index) => (
                        <span
                          key={index}
                          className={`text-center ${
                            index === question.value
                              ? "font-bold text-background"
                              : ""
                          }`}>
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-background mb-4">
                  Summary of Your Responses
                </h3>
                {questions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-background p-2 rounded-lg space-y-1">
                    <p className="text-foreground">{question.text}</p>
                    <p className="text-primary">
                      {question.labels[question.value]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            {!showSummary ? (
              <div className="w-full flex justify-between mt-8">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}>
                  Previous
                </Button>
                <Button onClick={handleNextPage}>
                  {currentPage ===
                  Math.ceil(questions.length / QUESTIONS_PER_PAGE) - 1
                    ? "Review"
                    : "Next"}
                </Button>
              </div>
            ) : (
              <div className="w-full space-y-2 mt-8">
                <Button
                  onClick={handleSubmit}
                  className="bg-background text-foreground hover:bg-background hover:text-foreground hover:opacity-90 w-full">
                  Submit
                </Button>
                <Button
                  onClick={cancelSubmit}
                  className="text-background hover:opacity-90 w-full">
                  Cancel
                </Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
