import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import SanitizedContent from "@/utility/SanitizeHtml";

export default function SingleCart({ value }) {
  // const sanitizedContent = convertMarkdownToHtml(value.attributes.desc);

  return (
    <div>
      <Link href={`/blog/${value.id}`}>
        <Card className={" flex w-[500px] "}>
          <div className=" border w-[50%]">
            <CardHeader>
              <CardTitle>{value.attributes.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" truncate">
                <SanitizedContent content={value.attributes.desc} />
              </p>
            </CardContent>
            <CardFooter className="">
              <p className=" flex gap-2">
                Read more <MoveRight></MoveRight>
              </p>
            </CardFooter>
          </div>
          <div className=" w-[50%] h-full m-auto">
            <img className=" w-full " src="/hero.jpg" alt="" />
          </div>
        </Card>
      </Link>
    </div>
  );
}
