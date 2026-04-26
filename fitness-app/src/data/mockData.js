export const mockExercises = [
  // Pecho
  { 
    id: '1', name: 'Press de Banca 👻', category: 'Pecho', equipment: 'Barra', image: '👻',
    description: 'Acuéstate en el banco, agarra la barra a la anchura de los hombros, bájala hasta el pecho y empuja hacia arriba.',
    primaryMuscles: 'Pectoral Mayor',
    secondaryMuscles: 'Tríceps, Deltoides Anterior',
    benefits: 'Desarrolla fuerza y masa en la parte superior del cuerpo.',
    level: 'Intermedio'
  },
  { 
    id: '2', name: 'Aperturas con Mancuernas 🦇', category: 'Pecho', equipment: 'Mancuernas', image: '🦇',
    description: 'Acuéstate boca arriba, con los brazos estirados sobre el pecho. Abre los brazos en arco y vuelve a cerrarlos.',
    primaryMuscles: 'Pectoral Mayor',
    secondaryMuscles: 'Deltoides Anterior',
    benefits: 'Aísla el pecho y mejora el estiramiento muscular.',
    level: 'Principiante'
  },
  // Espalda
  { 
    id: '3', name: 'Remo con Barra 🧟', category: 'Espalda', equipment: 'Barra', image: '🧟',
    description: 'Inclina el torso hacia adelante, agarra la barra y tira de ella hacia tu abdomen manteniendo la espalda recta.',
    primaryMuscles: 'Dorsal Ancho',
    secondaryMuscles: 'Bíceps, Romboides',
    benefits: 'Aumenta el grosor de la espalda y mejora la postura.',
    level: 'Intermedio'
  },
  { 
    id: '4', name: 'Dominadas de Gárgola 🗿', category: 'Espalda', equipment: 'Peso Corporal', image: '🗿',
    description: 'Cuélgate de una barra con agarre prono y tira de tu cuerpo hacia arriba hasta que la barbilla pase la barra.',
    primaryMuscles: 'Dorsal Ancho',
    secondaryMuscles: 'Bíceps, Antebrazos',
    benefits: 'Ejercicio fundamental para la amplitud y fuerza de la espalda.',
    level: 'Intermedio'
  },
  // Piernas
  { 
    id: '5', name: 'Sentadillas Libre 🧹', category: 'Piernas', equipment: 'Barra', image: '🧹',
    description: 'Coloca la barra sobre los trapecios, baja flexionando rodillas y caderas, y vuelve a subir.',
    primaryMuscles: 'Cuádriceps, Glúteos',
    secondaryMuscles: 'Isquiosurales, Core',
    benefits: 'Desarrollo masivo de piernas y fuerza funcional global.',
    level: 'Intermedio'
  },
  { 
    id: '6', name: 'Peso Muerto Rumano 🎃', category: 'Piernas', equipment: 'Barra', image: '🎃',
    description: 'Con piernas ligeramente flexionadas, baja la barra empujando la cadera hacia atrás hasta sentir estiramiento.',
    primaryMuscles: 'Isquiosurales, Glúteos',
    secondaryMuscles: 'Espalda Baja',
    benefits: 'Fortalece la cadena posterior y previene lesiones de espalda.',
    level: 'Intermedio'
  },
  // Hombros
  { 
    id: '7', name: 'Press Militar 💀', category: 'Hombros', equipment: 'Mancuernas', image: '💀',
    description: 'Empuja las mancuernas desde la altura de los hombros hacia arriba de la cabeza hasta estirar los brazos.',
    primaryMuscles: 'Deltoides Anterior y Medio',
    secondaryMuscles: 'Tríceps',
    benefits: 'Construye hombros anchos y mejora la fuerza de empuje vertical.',
    level: 'Principiante'
  },
  { 
    id: '8', name: 'Elevaciones Laterales 🕷️', category: 'Hombros', equipment: 'Mancuernas', image: '🕷️',
    description: 'De pie, levanta los brazos a los lados hasta que estén paralelos al suelo.',
    primaryMuscles: 'Deltoides Medio',
    secondaryMuscles: 'Trapecio',
    benefits: 'Aísla la porción lateral del hombro para mayor anchura.',
    level: 'Principiante'
  },
  // Brazos
  { 
    id: '9', name: 'Curl de Bíceps 🕸️', category: 'Brazos', equipment: 'Mancuernas', image: '🕸️',
    description: 'De pie o sentado, flexiona los codos subiendo el peso hacia los hombros sin balancear el torso.',
    primaryMuscles: 'Bíceps Braquial',
    secondaryMuscles: 'Braquial, Antebrazo',
    benefits: 'Desarrolla el tamaño y la fuerza frontal de los brazos.',
    level: 'Principiante'
  },
  { 
    id: '10', name: 'Extensión de Tríceps 🦴', category: 'Brazos', equipment: 'Polea', image: '🦴',
    description: 'Frente a una polea alta, empuja el cable hacia abajo manteniendo los codos pegados al cuerpo.',
    primaryMuscles: 'Tríceps Braquial',
    secondaryMuscles: 'Hombro Posterior',
    benefits: 'Tonifica y aumenta la masa de la parte trasera del brazo.',
    level: 'Principiante'
  },
  // Core
  { 
    id: '11', name: 'Plancha Demoníaca 👹', category: 'Core', equipment: 'Peso Corporal', image: '👹',
    description: 'Apóyate en los antebrazos y las puntas de los pies, manteniendo el cuerpo en línea recta.',
    primaryMuscles: 'Transverso Abdominal, Recto Abdominal',
    secondaryMuscles: 'Hombros, Glúteos',
    benefits: 'Mejora la estabilidad central y la resistencia del núcleo.',
    level: 'Principiante'
  },
  { 
    id: '12', name: 'Crunches de Zombi 🧟‍♀️', category: 'Core', equipment: 'Peso Corporal', image: '🧟‍♀️',
    description: 'Acuéstate boca arriba, rodillas flexionadas, levanta los hombros del suelo contrayendo el abdomen.',
    primaryMuscles: 'Recto Abdominal',
    secondaryMuscles: 'Oblicuos',
    benefits: 'Aísla el abdomen para lograr mayor definición.',
    level: 'Principiante'
  }
];

export const mockHistory = [
  { id: 'h1', date: '31 Oct 2026', title: 'Entrenamiento del Terror', duration: '45 min', type: 'Full Body' },
  { id: 'h2', date: '29 Oct 2026', title: 'Piernas de Zombi', duration: '60 min', type: 'Piernas' },
  { id: 'h3', date: '27 Oct 2026', title: 'Pecho de Gárgola', duration: '50 min', type: 'Pecho' },
];
