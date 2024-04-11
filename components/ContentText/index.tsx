
type ContentTextProps = {
  text: string
}

const ContentText = ({text}: ContentTextProps) => {
  return (
    <div className='2xl:text-[2vw]'>{text}</div>
  )
}

export default ContentText