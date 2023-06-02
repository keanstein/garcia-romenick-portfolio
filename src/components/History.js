import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';

import {Card, CardContent, CardMedia} from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

import {Container, Row, Col} from 'react-bootstrap';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function History() {
	const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
 };

 const handleChangeIndex = (index: number) => {
    setValue(index);
 };

        return (
            <div id='history' className="bg-dark d-flex flex-wrap container-fluid d-flex justify-content-center align-items-center py-5 px-2">
			<div className="container">
			
				<Box className="bg-darker text-light" >
			    <AppBar position="static">
			        <Tabs
					value={value}
					onChange={handleChange}
					TabIndicatorProps={{
					style: {
						backgroundColor: "red",
						height: "5px"
					}
					}}
					textColor="inherit"
					variant="fullWidth"
					className="bg-warning text-dark"
			        >
					<Tab className="fw-bold" label="Academic Experience" {...a11yProps(0)} />
					<Tab className="fw-bold" label="Work Experience" {...a11yProps(1)} />
					<Tab className="fw-bold" label="Trainings" {...a11yProps(2)} />
					<Tab className="fw-bold" label="Others" {...a11yProps(3)} />
			        </Tabs>
			    </AppBar>
					<TabPanel value={value} index={0} dir={theme.direction} className='d-flex justify-content-center align-items-center'>
					<Container className='p-3 d-flex justify-content-center align-items-center'>
						<Row >
							<Col  lg={3} className='my-3 my-lg-0 '>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>
						</Row>
					</Container>
			        </TabPanel>
					
			        <TabPanel value={value} index={1} dir={theme.direction} className='d-flex justify-content-center align-items-center'>
			        	<Container className='p-3 d-flex justify-content-center align-items-center'>
						<Row >
							<Col  lg={3} className='my-3 my-lg-0 '>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>
						</Row>
					</Container>
			        </TabPanel>

			        <TabPanel value={value} index={2} dir={theme.direction} className='d-flex justify-content-center align-items-center'>
			        					<Container className='p-3 d-flex justify-content-center align-items-center'>
						<Row >
							<Col  lg={3} className='my-3 my-lg-0 '>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>
						</Row>
					</Container>
			        </TabPanel>

			        <TabPanel value={value} index={3} dir={theme.direction} className='d-flex justify-content-center align-items-center'>
			        					<Container className='p-3 d-flex justify-content-center align-items-center'>
						<Row >
							<Col  lg={3} className='my-3 my-lg-0 '>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>

							<Col  lg={3} className='my-3 my-lg-0'>
								<Card  className='bg-dark text-light'>
									<CardActionArea>
										<CardMedia
										component="img"
										height="140"
										image="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400894.jpg?w=1380&t=st=1685380545~exp=1685381145~hmac=d6b7f106343d382225acc95de3a74a7d7d11cabfc14255bb84e194c9717b2421"
										alt="green iguana"
										/>
										<CardContent className='text-light'>
										<Typography gutterBottom variant="h5" component="div" className='font-weight-bold'>
											Lizard
										</Typography>
										<Typography variant="body2">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="warning">
										More
										</Button>
									</CardActions>
								</Card>
								
							</Col>
						</Row>
					</Container>
			        </TabPanel>

			    </Box>
			</div>
		</div>
        );
    }