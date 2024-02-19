import { useState } from 'react'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { FormGroup, InputField, InputIcon } from '@/components/ui'
import * as S from './form-specialty-styles'

const plansHealth = [
  'Sulamerica',
  'Unimed',
  'Bradesco',
  'Amil',
  'BioSaúde',
  'Biovida',
  'Outro',
]

export const FormSpecialty = () => {
  const [showPlans, setShowPlans] = useState<boolean>(false)

  const handleShowPlans = () => setShowPlans(!showPlans)

  return (
    <form>
      <FormGroup
        htmlFor="name"
        props={{ label: 'Nome', errors: '' }}
        sx={{ gridColumn: 'span 2' }}
      >
        <InputField
          id="name"
          type="text"
          placeholder="Digite seu nome completo"
        />
      </FormGroup>

      <FormGroup
        htmlFor="email"
        props={{ label: 'Email', errors: '' }}
        sx={{ gridColumn: 'span 2' }}
      >
        <InputField
          id="email"
          type="text"
          placeholder="Insira seu endereço de email"
        />
      </FormGroup>

      <FormGroup htmlFor="telephone" props={{ label: 'Telefone', errors: '' }}>
        <InputField
          id="telephone"
          type="text"
          placeholder="Digite seu telefone"
        />
      </FormGroup>

      <FormGroup
        htmlFor="specialty"
        props={{ label: 'Especialidade', errors: '' }}
        sx={{ gridColumn: 'span 2' }}
      >
        <InputField
          id="specialty"
          type="text"
          placeholder="Qual sua especialidade?"
        />
      </FormGroup>

      <FormGroup htmlFor="crm" props={{ label: 'CRM', errors: '' }}>
        <InputField
          id="crm"
          type="text"
          placeholder="Insira seu número de registro"
        />
      </FormGroup>

      <FormGroup
        htmlFor="photoURL"
        props={{ label: 'Insira a URL da imagem', errors: '' }}
        sx={{ gridColumn: 'span 4' }}
      >
        <InputField
          id="photoURL"
          type="text"
          placeholder="https://img.com/fotos/retrato-de-um-jovem-medico"
        />
      </FormGroup>

      <S.FormGroupAddress>
        <label>Endereço</label>

        <FormGroup
          htmlFor="street"
          props={{ errors: '' }}
          sx={{ gridColumn: 'span 3' }}
        >
          <InputField id="street" type="text" placeholder="Rua" />
        </FormGroup>

        <FormGroup
          htmlFor="cep"
          props={{ errors: '' }}
          sx={{ gridColumn: 'span 2/3' }}
        >
          <InputField
            id="cep"
            type="text"
            placeholder="Insira o CEP"
            startAdornment={<InputIcon icon={LocationOnIcon} />}
          />
        </FormGroup>

        <FormGroup
          htmlFor="number"
          props={{ errors: '' }}
          sx={{ gridColumn: 'span 1/2' }}
        >
          <InputField id="number" type="number" placeholder="Número" />
        </FormGroup>

        <FormGroup htmlFor="state" props={{ errors: '' }}>
          <InputField id="state" type="text" placeholder="Estado" />
        </FormGroup>

        <FormGroup htmlFor="complement" props={{ errors: '' }}>
          <InputField id="complement" type="text" placeholder="Complemento" />
        </FormGroup>
      </S.FormGroupAddress>

      <S.FormControl>
        <label htmlFor="radio-buttons-group-label">Possui plano saúde</label>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          name="row-radio-buttons-group"
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Sim" />
          <FormControlLabel value="no" control={<Radio />} label="Não" />
        </RadioGroup>
      </S.FormControl>

      <S.FormControl>
        <label htmlFor="radio-buttons-group-label">Está ativo</label>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          name="row-radio-buttons-group"
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Sim" />
          <FormControlLabel value="no" control={<Radio />} label="Não" />
        </RadioGroup>
      </S.FormControl>

      <S.FormSwitch>
        <label>Atende por plano?</label>
        <Switch checked={showPlans} onClick={handleShowPlans} />
        <span>Não/Sim</span>
      </S.FormSwitch>

      {showPlans && (
        <S.FormGroupCheck>
          <label>Selecione os planos:</label>

          {plansHealth.map((props, index) => (
            <FormControlLabel
              key={index}
              componentsProps={{ ...Typography }}
              label={props}
              control={<Checkbox />}
            />
          ))}
        </S.FormGroupCheck>
      )}

      <div style={{ gridColumn: 'span 4', placeSelf: 'center', marginTop: 20 }}>
        <Button type="submit">Cadastrar</Button>
      </div>
    </form>
  )
}
