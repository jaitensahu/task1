import { TextField } from "@mui/material";

export const ContaineWrapper = ({children}) =>{
    return (
        <div className="w-full mt-9 p-[34px]">
        {children}
        </div>
    )
}

export const InputField = (props) => {
    return (
      <TextField
        className="p-0"
        id="outlined-basic"
        label={props.label}
        value={props.value}
        name={props.name}
        size="small"
        onChange={props.handleChange}
      />
    );
  };