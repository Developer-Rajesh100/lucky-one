import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question container">
      <p>
        <strong>1) রিয়েক্ট কীভাবে কাজ করে?</strong>
        <br />
        Answer ➤ রিয়েক্ট হচ্ছে জাভাস্ক্রিপ্ট এর একটা পাওয়ারফুল লাইব্রেরি। যেটা
        বিভিন্ন ওয়েবসাইট, অ্যাপ, ওয়েবঅ্যাপলিকেশন, সফটওয়্যার এর UI তৈরি করা হয়।
        রিয়েক্টের উৎপত্তি হয়েছিল 2011 সালে। বর্তমানে রিয়েক্ট হচ্ছে চাকরির
        বাজারের সবচেয়ে গুরুত্বপূর্ণ লাইব্রেরি।
        <br />
        <br />
        <strong>2) ইউজস্টেট কীভাবে কাজ করে?</strong>
        <br />
        Answer ➤ ইউজস্টেট হল প্রতিক্রিয়ার একটি বিল্ড-ইন হুক। আমাদের স্টেটের
        একটি প্রাথমিক মান পাস করতে হবে এবং এটি একটি ভেরিয়েবল রিটার্ন করবে যার
        মধ্যে ফাংশনের মান থাকবে যা useState হুক দ্বারাও ফেরত দেওয়া হয়। আমরা
        ভেরিয়েবলের মান পরিবর্তন করতে সেই ফাংশনটি ব্যবহার করতে পারি।
      </p>
    </div>
  );
};

export default Question;