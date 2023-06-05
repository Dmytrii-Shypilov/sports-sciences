

function ArrowIcon({isDropped}) {
    const position = isDropped ? "rotate(90deg)" : "rotate(0deg)"
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      style={{transition: "transform 250ms" ,  transform: position }}
    >
      <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
    </svg>
  );
}

export default ArrowIcon
