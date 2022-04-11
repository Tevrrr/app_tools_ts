import { FC, useState } from 'react';

interface AlertProps {
    
}
 
const Alert: FC<AlertProps> = () => {
    const [className, setClassName] = useState(
		'alert-animation alert alert-error alert-sm transition-all duration-150 cursor-pointer'
	);
    function deleteAlert() {
        setClassName(className + ' opacity-0');
        setTimeout(()=>{}, 200)
    }
    return (
		<div className={className } onClick={deleteAlert}>
			error
		</div>
	);
}
 
export default Alert;