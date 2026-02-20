import {Button} from 'react-bootstrap';
import {useMyContext} from "../../Context";

export function TodoButton({name, onClick, variant, ...rest}) {
    const { color } = useMyContext()
    return (
        <Button variant={variant ?? color} className='border' onClick={onClick} {...rest}>{name}</Button>
    );
}