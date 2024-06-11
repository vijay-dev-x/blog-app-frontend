import React from "react";
import { convertMarkdownToHtml } from "./marked";
// import { convertMarkdownToHtml } from './utils'; // Adjust the import path as needed

const SanitizedContent = ({ content }) => {
  const sanitizedHtml = convertMarkdownToHtml(content);

  const createMarkup = (html) => {
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup(sanitizedHtml)} />;
};

export default SanitizedContent;
