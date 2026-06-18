import { useState } from "react";

import {
  createCourse,
} from "../services/courseService";

import { useAuth } from "../context/authContext";

function adminCourses() {
  const { user } = useAuth();

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      duration: "",
      price: "",
      level: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await createCourse(
        formData,
        user.token
      );

      alert(
        "Course Created Successfully"
      );

      setFormData({
        title: "",
        description: "",
        duration: "",
        price: "",
        level: "",
      });
    } catch (error) {
      alert(
        error.response?.data
          ?.message
      );
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Create Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          name="title"
          placeholder="Course Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={
            formData.description
          }
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          name="level"
          placeholder="Level"
          value={formData.level}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <button
          className="
          bg-red-700
          text-white
          px-6
          py-3
          rounded-lg
          "
        >
          Create Course
        </button>

      </form>

    </div>
  );
}

export default adminCourses;