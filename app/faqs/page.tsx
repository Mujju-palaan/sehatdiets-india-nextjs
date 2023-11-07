'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.css'
import { useState } from 'react';

export default function BasicAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className={styles.container}>
      <h1 style={{color:'#50D5B1', padding:'2rem'}}> FAQ's</h1>
      <Accordion className={styles.main} 
        expanded={expanded === 'panel1'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography 
          sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            1. What is SEHAT Nutrition, and how does it differ from other wellness platforms ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition is a revolutionary wellness platform that integrates personalized nutrition, 
          advanced technology, and comprehensive support. It stands out by offering tailored wellness 
          journeys for individuals, families, and corporations, focusing on holistic well-being 
          rather than just physical fitness.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel2'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            2. How do SEHAT Nutrition's personalized nutrition plans work ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          Certified nutritionists create personalized nutrition plans based on your health goals, 
          dietary preferences, and lifestyle. These plans are designed to help you achieve sustainable 
          results and build a positive relationship with food.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel3'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            3. Can I customize my fitness routine with SEHAT Nutrition ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          Yes, SEHAT Nutrition offers virtual workout sessions led by experienced fitness trainers. 
          You can choose from a variety of exercises to align with your fitness goals and preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion className={styles.main}
        expanded={expanded === 'panel4'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel4')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold" , color:'rgba(24, 24, 24, 0.8)'}}>
            4. How does SEHAT Nutrition support mental health ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
            SEHAT Nutrition provides AI-driven techniques to manage stress and anxiety, 
            recognizing the connection between mental and physical well-being. Users can access 
            tools and resources to nurture their emotional health.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel5'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel5')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            5. What are the health tracking devices included in the plans ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition provides cutting-edge health tracking devices to monitor vital 
          parameters and track progress. Users can choose between Apple and Samsung wellness 
          kits to align with their technological ecosystem of preference.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel6'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel6')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            6. Is SEHAT Nutrition suitable for families ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          Absolutely, SEHAT Nutrition offers a Family Plan that extends all features of the 
          Individual Plan to a family of up to five members. It promotes shared wellness 
          experiences, bonding, and accountability.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel7'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel7')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            7. How can corporations benefit from SEHAT Nutrition's Corporate Plan ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          Corporations can optimize employee well-being and productivity by offering 
          SEHAT Nutrition's Corporate Plan. It extends the benefits of the Individual 
          Plan to up to 50 employees, supporting both individual health and organizational success.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel8'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel8')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            8. Can I try SEHAT Nutrition before committing to a subscription ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition offers a transparent refund policy that spans two months from the 
          commencement of the subscription. If you're not satisfied within this 
          timeframe, you can request a full refund.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.main}
        expanded={expanded === 'panel9'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel9')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            9. What is the cost of SEHAT Nutrition's subscription plans ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition offers different plans: $365/year for the Individual Plan, 
          $1000/year for the Family Plan, and $5000/year for the Corporate Plan, with 
          varying features and benefits.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.main}
        expanded={expanded === 'panel10'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel10')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            10. How does SEHAT Nutrition handle dietary restrictions and preferences ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition's personalized nutrition plans take into account your dietary 
          restrictions and preferences, ensuring that your wellness journey aligns with your unique needs.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel11'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel11')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11-content"
          id="panel11-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            11. What sets SEHAT Nutrition's AI recipe generator apart from other meal planning tools ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition's AI recipe generator suggests meals based on available ingredients, 
          dietary requirements, and personal preferences, making meal planning diverse and exciting.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel12'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel12')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12-content"
          id="panel12-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            12. Is SEHAT Nutrition available globally ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition is committed to expanding its reach. While it may currently serve 
          specific regions, it has plans for wider global availability in the future.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel13'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel13')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13-content"
          id="panel13-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            13. How often are new virtual workout sessions and recipes added ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition regularly updates its library of virtual workout sessions and recipes to keep 
          your wellness journey fresh and engaging.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel14'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel14')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14-content"
          id="panel14-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            14. Can I switch between Apple and Samsung wellness kits during my subscription ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition allows flexibility in choosing your wellness kit, but once selected, 
          it remains consistent throughout your subscription. You can change your 
          kit when renewing your subscription.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel15'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel15')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15-content"
          id="panel15-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            15. Are there any hidden fees or additional costs beyond the subscription price ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition operates with transparency. There are no hidden fees or extra costs beyond 
          the subscription price, ensuring a clear and predictable investment in your well-being.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel16'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel16')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16-content"
          id="panel16-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            16. How do I access customer support if I have questions or encounter issues ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition offers dedicated customer support through various channels, 
          including email, live chat, and phone support, to assist you with any inquiries or concerns.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel17'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel17')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel17-content"
          id="panel17-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            17. Is SEHAT Nutrition's platform accessible via mobile devices ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          Yes, SEHAT Nutrition's platform is designed to be mobile-friendly and has a user-friendly app, 
          allowing you to access your personalized plans and resources on the go.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel18'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel18')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel18-content"
          id="panel18-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
          18. Are the virtual workout sessions suitable for beginners ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition's virtual workout sessions cater to different fitness levels and preferences, 
          including beginners. You can choose sessions that suit your fitness level and gradually progress.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel19'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel19')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel19-content"
          id="panel19-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            19. What measures does SEHAT Nutrition take to ensure data privacy and security ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          SEHAT Nutrition prioritizes data privacy and security. It employs industry-standard 
          encryption and security protocols to protect user information and maintains strict privacy policies.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}
        expanded={expanded === 'panel20'}
        onChange={(Event, isExpanded) =>  handleChange(isExpanded, 'panel20')}
      >
        <AccordionSummary         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel20-content"
          id="panel20-header"
        >
          <Typography sx={{fontSize:'2rem', fontWeight:"bold", color:'rgba(24, 24, 24, 0.8)'}}>
            20. Can I cancel my subscription at any time ?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'1.5rem', color:'gray'}}>
          Yes, you can cancel your SEHAT Nutrition subscription at any time. 
          The refund policy also allows for a full refund within the first two months, 
          giving you flexibility and peace of mind.

          </Typography>
        </AccordionDetails>
      </Accordion>

            
    </div>
  );
}