import { Button, Grid, Paper } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import atenaLogo from "../../assets/images/atena-logo-horizontal-white.png";
// import ModalRequestProfessor from "./ModalRequestProfessor";
import ModalFormStudent from "./ModalFormStudent";
import { margin } from "@mui/system";

function Register(){
  // const [isProfessor, setIsProfessor] = useState("");
  const [modalProfessorIsOpen, setModalProfessorIsOpen] = useState(false);
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState(false);

  const navigate = useNavigate()

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "220px auto",
  };

  const buttonProfessor = {
    backgroundColor: "#8187DC"
  }

  const buttonStudent = {
    backgroundColor: "#8187DC",
    marginTop: 5
  }

  const backButtonStyle = {
    borderColor: "#8187DC",
    color: "#8187DC"
  }

  function backLoginPage() {
    navigate("/");
  }

  console.log(modalProfessorIsOpen);
  console.log(modalStudentIsOpen);

  return(
    <div className="register">
      <div className="register__part1">  
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <p className="title">Registro</p>
            <p className="description">Para criar sua conta, precisamos saber que tipo de usuário(a) você é:</p>        
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={
                (event) => {
                  // setIsProfessor(true)
                  setModalProfessorIsOpen(true)
                }
              }
              style={buttonProfessor}
            >
              Professor(a)
            </Button>
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={
                (event) => {
                  // setIsProfessor(false)
                  setModalStudentIsOpen(true)
                }
              }
              style={buttonStudent}
            >
              Aluno(a)
            </Button>
            <div className="back">
              <Button
                size="small"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                style={backButtonStyle}
                onClick={backLoginPage}
              >
                Voltar
              </Button>
            </div>
          </Paper>
        </Grid>
        {/* {modalProfessorIsOpen
          ? (<ModalRequestProfessor onClose={() => setModalProfessorIsOpen(false)}/>)
          : null
        } */}
        {modalStudentIsOpen
          ? (<ModalFormStudent onClose={() => setModalStudentIsOpen(false)}/>)
          : null
        }
      </div>
      <div className="register__part2"></div>
    </div>
  )
};

export default Register;
