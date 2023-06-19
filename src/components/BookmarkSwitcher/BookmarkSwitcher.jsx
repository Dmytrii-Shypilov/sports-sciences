import s from "./bookmark-switcher.module.scss";

import { useEffect, useState } from "react";

import Bookmark from "./Bookmark";

const BookmarkSwitcher = ({ bookmarks, setSection }) => {
  const [selected, setSelected] = useState(bookmarks[0]);

  useEffect(() => {
    setSection(selected);
  }, [selected]);

  const bookmarksList = bookmarks.map((name) => {
    return (
      <Bookmark setSelected={setSelected} selected={selected} name={name} />
    );
  });

  return <ul className={s.switcher}>{bookmarksList}</ul>;
};

export default BookmarkSwitcher;
