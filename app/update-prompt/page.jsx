"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Form from "@components/Form";
import Loading from "@app/profile/loading";
// Separate component to get and provide the prompt ID
function PromptIdFetcher({ setPromptId }) {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  useEffect(() => {
    setPromptId(promptId);
  }, [promptId, setPromptId]);

  return null; // This component does not render anything
}

const UpdatePrompt = () => {
  const router = useRouter();
  const [promptId, setPromptId] = useState(null);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      if (!promptId) return;

      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PromptIdFetcher setPromptId={setPromptId} />
      </Suspense>

      <div className="flex flex-col md:flex-row items-center">
        <Form
          type="Edit"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={updatePrompt}
        />
        <Image
          src="/assets/images/5r.png"
          alt="logo"
          width={300}
          height={300}
          className="object-contain items-center"
        />
      </div>
    </>
  );
};

export default UpdatePrompt;
