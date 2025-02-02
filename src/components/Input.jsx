import Label from './Label.jsx'
import S from 'styled-components'
import { deviceBrakepoints } from '@config/device-brakepoints.jsx'

const Input = ({ type = 'text', disabled, width, label, value, whenChanged }) => (
    <Container width={width}>
        <Label label={label} />
        <InnerInput type={type} disabled={disabled} value={value} onChange={whenChanged} />
    </Container>
)

const Container = S.div`
   display: inline-block;
   text-align: left;
   margin-bottom: 7px;
   width: ${props => (props.width ? props.width : '100')}%;  
`
const InnerInput = S.input`
   width: calc(100% - 36px);
   background-color: lightgrey;
   border: solid 1px var(--color-primary);
   font-family: Arial, Helvetica, sans-serif;
   line-height: 1.34em;
   font-size: 14px;
   padding: 2px 8px;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   outline: none;
   border-width: 0.7mm;
   &:disabled {
        background: gray;
   }
   @media ${deviceBrakepoints.mobile} {
      width: calc(100% - 26px);
   }
`

export default Input
