import s from './bookmark.module.scss'

const Bookmark = ({name, setSelected, selected}) => {
    const className= selected === name ? s.bookmarkActive : s.bookmark
    
    const selectBookmark = (e) => {
        setSelected(e.target.id) 
      }

    return (
        <li onClick={selectBookmark} key={name} id={name} className={className}>{name}</li>
    )
}

export default Bookmark