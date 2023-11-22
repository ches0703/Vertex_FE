import { useSelector } from 'react-redux';

export default function SubscribeComp() {

  const category = useSelector((state) => state.category)

  return (
    <h1>Subscribe</h1>

  )
}