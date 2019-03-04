import React from 'react'
import VLFieldMappingInput from './VLFieldMappingInput'

const VLAvailableFields = (props) => {
  const containerStyle = {
    gridArea: '2 / 1 / span 1 / span 2',
    display: 'grid',
    gridTemplateColumns: `${props.width} ${props.width}`
  }

  return (
    <div style={containerStyle}>
      <div style={{display: props.pdfFields.length === 0 ? 'none' : 'grid'}}>
        {props.pdfFields.map(pdfElement =>
          <div key={`${pdfElement.fieldName}Div1`}
            style={{overflow: "auto"}}>{pdfElement.fieldName}
          </div>)}
      </div>
      <div style={{fontSize: '10em',
        display: props.pdfFields.length === 0 ? 'initial' : 'none'}}>1</div>
      <div style={{display: props.csvFields.length === 0 ? 'none' : 'grid'}}>
        {props.csvFields.length === 0 ? [] :
          props.pdfFields.map(pdfElement =>
            <VLFieldMappingInput
              key={`${pdfElement.fieldName}Div2`}
              table={props.table}
              text={props.text}
              empty={props.empty}
              width={props.width}
              csvFields={props.csvFields}
              pdfFields={props.pdfFields}
              pdfElement={pdfElement}
              onFieldMappingChange={props.onFieldMappingChange}/>)}
      </div>
      <div style={{fontSize: '10em',
        display: props.csvFields.length === 0 ? 'initial' : 'none'}}>2</div>
    </div>
  )
}

export default VLAvailableFields
