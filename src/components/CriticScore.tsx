import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    // to-do: add critic score gauge ui...?
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
    
  )
}

export default CriticScore