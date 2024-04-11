
type ContentTextProps = {
  text: string
}

const ContentText = ({text}: ContentTextProps) => {
  return (
    <p className='2xl:text-[vw]'>{text}</p>
  )
}

export default ContentText