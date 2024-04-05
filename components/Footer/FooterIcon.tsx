import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type FooterIconProps = {
  icon: IconDefinition
}

const FooterIcon = ({ icon }: FooterIconProps) => {
  return (
    <>
      <div className='bg-white p-4 drop-shadow-2xl rounded-full hover:drop-shadow-md text-icondefault hover:text-iconhover'>
        {/* <div className='relative gap-5'> */}
        <FontAwesomeIcon className='top-[10px] left-10' icon={icon} />
        {/* <div className='absolute'> */}
        {/* <Card className='rounded-full p-4'> */}
        {/* </Card> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default FooterIcon