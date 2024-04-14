import { cn } from '@/lib/utils'

type TitleProps = {
  title: string
  hasLine: true | false
  className?: any
}

const Title = ({ title, hasLine, className }: TitleProps) => {
  return (
    <>
      <h1 className={cn('text-[#1C355E] text-[4vw] pt-[3vw]', className)}>{title}</h1>
      {hasLine ? <hr className={cn('border-2 border-solid border-line', className)} /> : null}
    </>
  )
}

export default Title
