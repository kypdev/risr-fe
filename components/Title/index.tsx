type TitleProps = {
  title: string
  hasLine: boolean
}

const Title = ({ title, hasLine }: TitleProps) => {
  return (
    <>
      <h1 className='text-[#1C355E] 2xl:text-[4vw] 2xl:pt-[3vw]'>{title}</h1>
      {hasLine ?? <hr className='border-2 border-solid border-line' />}
    </>
  )
}

export default Title
