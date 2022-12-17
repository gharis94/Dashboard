import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography,Box,useTheme} from '@mui/material';
import {tokens} from '../../theme';
import Header from '../../components/Header/Header'

const FAQ = () => {
    const theme=useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box>
        <Header heading="FAQ" subHeading='frequently askes questions'/>
        <Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        how to use computer?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        sdlfhksdfluksajnvz ldsnvfj,zdsvzl.kjnvdszxvlikj.z xvjk.nzdsvlkjzdx vjkz.dfvxnzlikjdsfnv zlikjsfvzlkjdrfnvizkdjsfbvnzkjdsfbgvnzsdkjvfnzdsljfnvz dv zdfxjkv 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        how to use computer?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        sdlfhksdfluksajnvz ldsnvfj,zdsvzl.kjnvdszxvlikj.z xvjk.nzdsvlkjzdx vjkz.dfvxnzlikjdsfnv zlikjsfvzlkjdrfnvizkdjsfbvnzkjdsfbgvnzsdkjvfnzdsljfnvz dv zdfxjkv 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        how to use computer?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        sdlfhksdfluksajnvz ldsnvfj,zdsvzl.kjnvdszxvlikj.z xvjk.nzdsvlkjzdx vjkz.dfvxnzlikjdsfnv zlikjsfvzlkjdrfnvizkdjsfbvnzkjdsfbgvnzsdkjvfnzdsljfnvz dv zdfxjkv 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Box>
    
  )
}

export default FAQ