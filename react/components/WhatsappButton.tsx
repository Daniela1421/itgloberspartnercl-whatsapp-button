import React from 'react'; 
import PropTypes from 'prop-types';  

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  console.log("Mi mensaje formateado es", formattedMessage, logo);
  
  return <>
    <div className='fixed bottom-2 right-1 flex flexColumn'>
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img 
          src={logo} 
          width={width} 
          height={height} 
          alt="Logo de whatsapp"
        />
      </a>
    </div>
  </>
} 

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired, 
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png", 
  phone: "3004507575", 
  message: "Estas comunicandote con kanu pet ingresa tu duda",
  width: 50,
  height: 50
}

WhatsappButton.schema = {
  title: "Bóton de whatsapp", 
  type: "object", 
  properties: {
    logo: {
      title: "Logo de WhatsApp que se relacione con la marca", 
      type: "string", 
      widget: {
        "ui:widget": "image-uploader"
      }
    }, 
    phone: {
      title: "Teléfono", 
      description: "Agrega por favor el número de teléfono", 
      type: "string"
    }, 
    message: {
      title: "Mensaje", 
      description: "Agrega por favor el mensaje que se vera para tu cliente", 
      type: "string", 
      widget: {
        "ui:widget": "textarea"
      }
    }, 
    width: {
      title: "width", 
      type: "number" 
    }, 
    height: {
      title: "height", 
      type: "number" 
    }
  }
}

export default WhatsappButton; 
