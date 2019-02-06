import { useReducer, ChangeEvent, FocusEvent, FormEvent } from 'react'

interface IUseFormInput<FormValues> {
  initialValues: FormValues
  onSubmit: (values: FormValues) => Promise<any>
}

interface IUseForm<FormValues> {
  values: FormValues
  isSubmitting: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent) => void
  handleReset: (event: FormEvent) => void
}

function useForm<FormValues>({
  initialValues,
  onSubmit,
}: IUseFormInput<FormValues>): IUseForm<FormValues> {
  const [{ values, touched, isSubmitting }, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      values: initialValues,
      touched: {},
      isSubmitting: false,
    }
  )

  function setSubmitting(isSubmitting: boolean) {
    setState({ isSubmitting })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({
      values: {
        ...values,
        [event.target.name]:
          event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      },
    })
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setState({
      touched: {
        ...touched,
        [event.target.name]: true,
      },
    })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)

    try {
      await onSubmit(values)
    } catch (err) {
      console.error('[useForm::handleSubmit] ERROR:', err)
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset(event: FormEvent) {
    event.preventDefault()

    setState({
      values: initialValues,
      touched: {},
      isSubmitting: false,
    })
  }

  return {
    values,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  }
}

export default useForm
