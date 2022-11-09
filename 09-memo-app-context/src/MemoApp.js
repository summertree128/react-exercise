import React, { useState } from "react";
import MemoDetail from "./components/MemoDetail";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function MemoApp() {
  const [memos, setMemos] = useState([]);
  const [memoInput, setMemoInput] = useState({
    editing: false,
    text: "",
    id: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setMemoInput({
      editing: true,
      text: "",
      id: "",
    });
  };

  const handleChange = (e) => {
    setMemoInput({
      editing: memoInput.editing,
      text: e.target.value,
      id: memoInput.id,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (memoInput.text.length === 0) {
      return;
    }

    if (memoInput.id) {
      updateMemo(memoInput.id, memoInput.text);
    } else {
      createMemo(memoInput.text);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const memoToEdit = memos.find((memo) => memo.id === parseInt(id));
    setMemoInput({
      editing: true,
      text: memoToEdit.content,
      id,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (memoInput.id) {
      setMemos(memos.filter((memo) => memo.id !== parseInt(memoInput.id)));
    }

    clearMemoInput();
  };

  const updateMemo = (id, text) => {
    const newMemos = [...memos];
    const updatedMemo = newMemos.find((memo) => memo.id === parseInt(id));
    updatedMemo.title = text.split("\n")[0];
    updatedMemo.content = text;

    setMemos(newMemos);
    clearMemoInput();
  };

  const createMemo = (text) => {
    const newMemo = {
      id: Date.now(),
      title: text.split("\n")[0],
      content: text,
    };
    const newMemos = [...memos, newMemo];

    setMemos(newMemos);
    clearMemoInput();
  };

  const clearMemoInput = () => {
    setMemoInput({
      editing: false,
      id: "",
      text: "",
    });
  };

  return (
    <div className="memo-app">
      <Header />
      <div className="memo-app-container">
        <Sidebar memos={memos} onEdit={handleEdit} onClick={handleAdd} />
        <MemoDetail
          memoInput={memoInput}
          onChange={handleChange}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default MemoApp;
