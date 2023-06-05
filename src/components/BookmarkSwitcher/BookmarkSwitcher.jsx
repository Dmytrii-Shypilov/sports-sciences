import s from "./bookmark-switcher.module.scss";

import { useState } from "react";

import Bookmark from "./Bookmark";

const BookmarkSwitcher = ({ bookmarks }) => {
  const [selected, setSelected] = useState(bookmarks[0]);

  const bookmarksList = bookmarks.map((name) => {
    return (
      <Bookmark setSelected={setSelected} selected={selected} name={name} />
    );
  });

  return <ul className={s.switcher}>{bookmarksList}</ul>;
};

export default BookmarkSwitcher;
