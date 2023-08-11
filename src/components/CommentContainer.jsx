import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Arun Kumar",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    reply: [
      {
        name: "Arun Kumar",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        reply: [
          {
            name: "Arun Kumar",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            reply: [
              {
                name: "Arun Kumar",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Arun Kumar",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    reply: [
      {
        name: "Arun Kumar",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        reply: [],
      },
    ],
  },
  {
    name: "Arun Kumar",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    reply: [],
  },
];

const Comments = ({ data }) => {
  return (
    <div className="flex gap-2 bg-[#F0F0F0] py-1 px-2 shadow-md my-2">
      <div className="pt-1">
        <FaUserCircle size={25} />
      </div>
      <div>
        <p className="font-medium text-gray-800">{data.name}</p>
        <p className="text-gray-800 line-clamp-1 md:line-clamp-2">
          {data.comment}
        </p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border-l border-l-gray-500">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="pt-3 mb-8">
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
