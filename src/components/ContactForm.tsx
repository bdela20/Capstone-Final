import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../Api/Server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseLitres, chooseCountry } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.brand } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseBrand(data.brand));
      dispatch(chooseLitres(data.litres));
      dispatch(chooseCountry(data.country));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Brand</label>
          <Input {...register('brand')} name='brand' placeholder="Brand..." />
        </div>
        <div>
          <label htmlFor="litres">Litres, ml or oz</label>
          <Input {...register('litres')} name='litres' placeholder="Litres, ml or oz..." />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <Input {...register('country')} name='country' placeholder="Country..." />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-400 text-black"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

