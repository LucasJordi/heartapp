export const ValidarHep2=(response,sethep,setepc2,epc)=>{
    
      if (response[3]=="Baixa"&&response[5]=="Não"){
        sethep(0.55);
        setepc2([epc[12],epc[15]]);
      }
        
        if (response[1]=="Não existe"&&response[2]=="Não existe verificação"&&response[6]=="Alta"){
        sethep(0.26);
        setepc2([epc[12],epc[14],epc[15]]);
      }
        
        if (response[0]=="Alta"){
        sethep(0.16);
        setepc2([epc[4],epc[8],epc[9],epc[12],epc[15],epc[16]]);
      }
        
        if (response[0]=="Alta"&&response[1]=="Difícil utilização"&&response[2]=="Não existe verificação"&&response[3]=="Baixa"&&response[5]=="Sim"&&response[6]=="Média"){
        sethep(0.145);
        setepc2([epc[12],epc[15],epc[16]]);
      }
           
        if (response[0]=="Alta"&&response[1]=="Difícil utilização"&&response[2]=="Não existe verificação"&&response[3]=="Alta"&&response[5]=="Sim"&&response[6]=="Média"){
        sethep(0.125);
        setepc2([epc[8],epc[14],epc[15],epc[16]]);
      }
        
        if (response[6]=="Média"&&response[7]=="Baixa"){
        sethep(0.09);
        setepc2([epc[6],epc[8],epc[9],epc[10],epc[12],epc[15],epc[16]]);
      }
        
        if (response[3]=="Baixa"&&response[5]=="Sim"&&response[6]=="Média"&&response[7]=="Alta"){
        sethep(0.060);
        setepc2([epc[8],epc[14],epc[15],epc[16]]);
      }
        
        if (response[3]=="Baixa"&&response[5]=="Sim"&&response[6]=="Baixa"&&response[7]=="Alta"){
        sethep(0.035);
        setepc2([epc[8],epc[14],epc[15],epc[16]]);
      }
        
        if (response[0]=="Baixa"==response[3]=="Média"==response[6]=="Baixa"){
        sethep(0.02);
        setepc2([epc[2],epc[6],epc[8],epc[9],epc[12],epc[13],epc[15],epc[16]]);
      }
        
        if (response[1]=="Não existe"&&response[2]=="Alguma verificação"&&response[3]=="Média"&&response[8]=="Inadequado"){
        sethep(0.012);
        setepc2([epc[8],epc[14],epc[15],epc[16]]);
      }
        
        if (response[1]=="Difícil utilização"&&response[2]=="Alguma verificação"){
        sethep(0.003);
        setepc2([epc[0],epc[5],epc[7],epc[8],epc[10],epc[12],epc[13],epc[14],epc[15],epc[16]]);
      }
        
        if (response[1]=="Difícil utilização"&&response[2]=="Não existe verificação"&&response[3]=="Média"&&response[8]=="Inadequado"){
        sethep(0.0015);
        setepc2([epc[8],epc[14],epc[15],epc[16]]);
      }
        
        if (response[1]=="Difícil utilização"&&response[2]=="Não existe verificação"&&response[3]=="Alta"&&response[6]=="Baixa"&&response[8]=="Com tempo adequado"){
        sethep(0.0009);
        setepc2([epc[6],epc[8],epc[9],epc[11],epc[12],epc[15],epc[16]]);
      }
        
        if (response[7]=="Alta"&&response[8]=="Com tempo adequado"&&response[9]=="Pessoas altamente treinadas"&&response[10]=="Tem experiência"&&response[11]=="Alta"){
        sethep(0.0004);
        setepc2([epc[1],epc[2],epc[3],epc[4],epc[6],epc[8],epc[9],epc[11],epc[12],epc[14]]);
      }
        
        if (response[2]=="Alguma verificação"&&response[5]=="Sim"&&response[8]=="Com tempo adequado"&&response[9]=="Pessoas sem treinamento"){
        sethep(0.00025);
        setepc2([epc[6],epc[8],epc[9],epc[11],epc[12],epc[15],epc[16]]);
      }
        
        if (response[2]=="Alguma verificação"&&response[5]=="Sim"&&response[8]=="Com tempo adequado"&&response[9]=="Pessoas altamente treinadas"&&response[10]=="Não tem experiência"){
        sethep(0.00013);
        setepc2([epc[7],epc[8],epc[12],epc[15]]);
      }
        
        if (response[2]=="Alguma verificação"&&response[3]=="Alta"&&response[4]=="Não existe"&&response[8]=="Com tempo adequado"&&response[9]=="Pessoas altamente treinadas"&&response[10]=="Tem experiência"){
        sethep(0.000065);
        setepc2([epc[0],epc[2],epc[3],epc[5],epc[7],epc[8],epc[9],epc[10],epc[12],epc[13],epc[14],epc[15]]);
      }
        
        if (response[3]=="Alta"&&response[4]=="Existe ação da automação"){
        sethep(0.00002);
        setepc2([epc[1],epc[2],epc[3],epc[6],epc[7],epc[8],epc[9],epc[11],epc[12],epc[13],epc[15],epc[16]]);
      }
         
    
  }