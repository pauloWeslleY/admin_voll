import { FONTS } from '@/styles'
import { styled } from '@mui/material'
import MuiStep, { StepProps as MuiStepProps } from '@mui/material/Step'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'
import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper'

export const StepperWrap = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginInline: theme.spacing(60),
}))

export const StepperContent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: 1,

  '& > form': {
    marginInline: theme.spacing(48),

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: theme.spacing(4),
  },
}))

export const Stepper = styled(MuiStepper)<MuiStepperProps>(() => ({}))
export const Step = styled(MuiStep)<MuiStepProps>(() => ({}))

export const StepLabel = styled(MuiStepLabel)<MuiStepLabelProps>(() => ({
  '& .MuiStepLabel-label': {
    fontSize: FONTS.fontSizes.lg,
    fontWeight: FONTS.fontWeight.semibold,
  },
}))
