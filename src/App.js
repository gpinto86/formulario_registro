import './App.css';
import Container  from '@mui/material/Container';
import FormSingUp from './Components/FormSingUp';
import Typography from "@mui/material/Typography"

function App() {

  const handleSubmit = (valores) => {
    console.log('APPJS: ', valores)
  }
  
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant = "h3" align= "Center" component="h1">Formulario Registro</Typography>
      <FormSingUp />
    </Container>
  );
}

export default App;
