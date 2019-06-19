import React from 'react'

interface IUseFormInput<TFormValues> {
  initialValues: TFormValues
  onSubmit: (values: TFormValues) => Promise<any>
}

interface IUseForm<TFormValues> {
  values: TFormValues
  isSubmitting: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent) => void
  handleReset: (event: React.FormEvent) => void
}

function useForm<TFormValues>({
  initialValues,
  onSubmit,
}: IUseFormInput<TFormValues>): IUseForm<TFormValues> {
  const [{ values, touched, isSubmitting }, setState] = React.useReducer(
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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState({
      values: {
        ...values,
        [event.target.name]:
          event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      },
    })
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setState({
      touched: {
        ...touched,
        [event.target.name]: true,
      },
    })
  }

  async function handleSubmit(event: React.FormEvent) {
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

  function handleReset(event: React.FormEvent) {
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
