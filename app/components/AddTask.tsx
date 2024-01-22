"use client";

import React, { FormEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { addTodo } from "../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault;
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    console.log(newTaskValue);
    setNewTaskValue("");
    document.getElementById("my_modal_3")?.classList.remove("open");
    router.refresh;
  };

  return (
    <div>
      <button
        onClick={() =>
          document.getElementById("my_modal_3")?.classList.add("open")
        }
        className="btn btn-primary w-full"
      >
        Add new task <FaPlus className="ml-1 mb-0" size={15} />
      </button>

      <Modal modalOpen={modalOpen} id="my_modal_3">
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
