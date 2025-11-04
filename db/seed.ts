import { db, CourseCategories, Courses, Team } from 'astro:db'

export default async function () {
  await db.insert(CourseCategories).values([
    {
      id: 'ciencias-basicas',
      tag: '.ciencias-basicas',
      name: 'Ciencias Básicas',
    },
    {
      id: 'ciencias-clinicas',
      tag: '.ciencias-clinicas',
      name: 'Ciencias Clínicas',
    },
    {
      id: 'ciencias-quirurgicas',
      tag: '.ciencias-quirurgicas',
      name: 'Ciencias Quirúrgicas',
    },
  ])

  await db.insert(Courses).values([
    {
      id: 'BIO-100',
      title: 'Biología Celular',
      description:
        'Explora las complejidades de las células y moléculas que conforman la vida. Desde el ADN hasta los procesos celulares, los estudiantes obtienen una comprensión profunda de la genética y las interacciones intracelulares. Con enfoque teórico y práctico, el curso abre puertas a avances en medicina e investigación científica.',
      imageKey: '/media/courses/BIO-100.webp',
      tag: 'I CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'QUI-101',
      title: 'Química General',
      description:
        'Comprende la estructura, composición, propiedades y transformaciones de la materia. Fundamenta los procesos biológicos desde la perspectiva molecular, abordando la composición química de los organismos y su relación con la salud.',
      imageKey: '/media/courses/QUI-101.webp',
      tag: 'I CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'BIF-102',
      title: 'Biofísica Médica',
      description:
        'Explora el campo interdisciplinario que fusiona la Física con la Biología para comprender los procesos biológicos desde una perspectiva cuantitativa. Explora cómo las leyes físicas se aplican a los sistemas biológicos, desde la mecánica celular hasta la imagenología médica. Este enfoque permite desarrollar técnicas innovadoras para comprender mejor el funcionamiento del cuerpo humano',
      imageKey: '/media/courses/BIF-102.webp',
      tag: 'I CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MAT-103',
      title: 'Matemática',
      description:
        'Proporciona herramientas para cuantificar fenómenos biológicos, modelar sistemas fisiológicos y realizar análisis críticos fundamentales para la práctica médica.',
      imageKey: '/media/courses/MAT-103.webp',
      tag: 'I CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'ANA-104',
      title: 'Anatomía Básica',
      description:
        'Estudia la estructura del cuerpo humano, desde los órganos hasta el sistema musculoesquelético, proporcionando la base para comprender la disposición anatómica esencial en la Medicina.',
      imageKey: '/media/courses/ANA-104.webp',
      tag: 'II CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'FIS-105',
      title: 'Fisiología',
      description:
        'Explora los procesos vitales del cuerpo humano, desde la respiración hasta la circulación, conectando la química y la anatomía en el estudio de las funciones corporales.',
      imageKey: '/media/courses/FIS-105.webp',
      tag: 'II CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'BIOQ-106',
      title: 'Bioquímica',
      description:
        'Estudio de las moléculas biológicas, como proteínas, enzimas, ácidos nucleicos y su función en la vida celular.',
      imageKey: '/media/courses/BIOQ-106.webp',
      tag: 'II CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'HIS-107',
      title: 'Histología',
      description:
        'studia la estructura microscópica de los tejidos, esencial para comprender la composición celular y la base de los órganos, proporcionando información crucial para la práctica clínica y la comprensión detallada del cuerpo humano.',
      imageKey: '/media/courses/HIS-107.webp',
      tag: 'II CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'CI-108',
      title: 'Casos Integradores I',
      description: 'Integración de conocimientos adquiridos en el ciclo, aplicados a situaciones clínicas simuladas.',
      imageKey: '/media/courses/CI-108.webp',
      tag: 'II CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MOR-109',
      title: 'Morfoanatomía I',
      description:
        'Explora la estructura macroscópica del sistema nervioso, detallando la disposición anatómica de cerebro, médula espinal y nervios periféricos, proporcionando los cimientos para comprender la organización física del sistema nervioso en el cuerpo humano.',
      imageKey: '/media/courses/MOR-109.webp',
      tag: 'III CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MORF-110',
      title: 'Morfofisiología I',
      description:
        'Aborda la función y la interrelación entre estructura y función en el sistema nervioso. Analiza cómo la anatomía influye en la fisiología neuronal, desde la generación de potenciales de acción hasta la transmisión sináptica, esencial para entender el funcionamiento del sistema nervioso.',
      imageKey: '/media/courses/MORF-110.webp',
      tag: 'III CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MORH-111',
      title: 'Morfohistología I',
      description:
        'Estudia la estructura microscópica de los tejidos nerviosos, incluyendo neuronas y células gliales, ofreciendo una visión detallada de la composición celular y la organización histológica del sistema nervioso.',
      imageKey: '/media/courses/MORH-111.webp',
      tag: 'III CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MORFEMB-112',
      title: 'Morfoembriología I',
      description:
        'Explora el desarrollo embrionario del sistema nervioso, desde la formación inicial de la médula espinal y el cerebro hasta la aparición y diferenciación de estructuras neuronales, proporcionando la base para comprender la evolución y formación del sistema nervioso en el ser humano.',
      imageKey: '/media/courses/MORFEMB-112.webp',
      tag: 'III CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'CI-113',
      title: 'Casos Integradores II',
      description: 'Resolución de casos clínicos que requieren conocimientos de los ciclos anteriores.',
      imageKey: '/media/courses/CI-113.webp',
      tag: 'III CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'GEMB-114',
      title: 'Genética y Embriología',
      description: 'Principios genéticos y su relación con el desarrollo embrionario y enfermedades congénitas.',
      imageKey: '/media/courses/GEMB-114.webp',
      tag: 'III CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MOR-115',
      title: 'Morfoanatomía II',
      description:
        'Explora la anatomía macroscópica de los sistemas cardiovascular, respiratorio y digestivo. Detalla la disposición anatómica del corazón, los vasos sanguíneos, los pulmones y el tracto gastrointestinal, proporcionando una comprensión estructural fundamental para la práctica médica.',
      imageKey: '/media/courses/MOR-115.webp',
      tag: 'IV CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MORF-116',
      title: 'Morfofisiología II',
      description:
        'Aborda la función y la interrelación entre estructura y función en los sistemas cardiovascular, respiratorio y digestivo. Analiza desde la circulación sanguínea hasta la respiración y la digestión, mostrando cómo la anatomía influye directamente en la fisiología de estos sistemas vitales.',
      imageKey: '/media/courses/MORF-116.webp',
      tag: 'IV CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MORH-117',
      title: 'Morfohistología II',
      description:
        'Estudia la estructura microscópica de los tejidos en estos sistemas, incluyendo el tejido cardíaco, pulmonar y el gastrointestinal. Ofrece una visión detallada de la composición celular y la organización histológica específica de cada sistema.',
      imageKey: '/media/courses/MORH-117.webp',
      tag: 'IV CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MORFEMB-118',
      title: 'Morfoembriología II',
      description:
        'Explora el desarrollo embrionario de estos sistemas, desde la formación inicial del corazón, los pulmones y los órganos digestivos durante las primeras etapas embrionarias, proporcionando la base para comprender la formación y evolución de estos sistemas en el ser humano',
      imageKey: '/media/courses/MORFEMB-118.webp',
      tag: 'IV CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'CI-119',
      title: 'Casos Integradores III',
      description: 'Aplicación de conocimientos avanzados en escenarios clínicos complejos.',
      imageKey: '/media/courses/CI-119.webp',
      tag: 'IV CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'INM-120',
      title: 'Inmunología',
      description:
        'Aborda la respuesta inmunitaria, desde la inmunidad innata hasta la adquirida, explorando la acción de linfocitos, anticuerpos y citoquinas en enfermedades autoinmunes y alergias.',
      imageKey: '/media/courses/INM-120.webp',
      tag: 'IV CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'PAT-121',
      title: 'Patología',
      description:
        'Estudia la etiología, fisiopatología y manifestaciones macro y microscópicas de las enfermedades, siendo fundamental para diagnósticos precisos y estrategias terapéuticas.',
      imageKey: '/media/courses/PAT-121.webp',
      tag: 'V CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'FAR-122',
      title: 'Farmacología Básica',
      description:
        'Examina la interacción fármaco-receptor, los mecanismos de acción, farmacocinética y farmacodinamia, así como los efectos adversos y la farmacogenómica.',
      imageKey: '/media/courses/FAR-122.webp',
      tag: 'V CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'MIC-123',
      title: 'Microbiología',
      description:
        'Estudia microorganismos como bacterias, virus, hongos y protozoos, explorando su estructura, función, patogenicidad, epidemiología y su implicación en enfermedades infecciosas.',
      imageKey: '/media/courses/MIC-123.webp',
      tag: 'V CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'PAR-124',
      title: 'Parasitología',
      description:
        'Se enfoca en parásitos, desde helmintos hasta protozoos, analizando su ciclo de vida, patogenia, diagnóstico y tratamiento de enfermedades parasitarias',
      imageKey: '/media/courses/PAR-124.webp',
      tag: 'V CICLO',
      category: 'ciencias-basicas',
    },
    {
      id: 'SEM-125',
      title: 'Semiología Médica',
      description:
        'Enseña técnicas de evaluación física y exploración clínica, como la inspección, palpación, percusión y auscultación, para identificar signos vitales y síntomas asociados a diversas enfermedades en los sistemas corporales.',
      imageKey: '/media/courses/SEM-125.webp',
      tag: 'VI CICLO',
      category: 'ciencias-clinicas',
    },
    {
      id: 'MED-126',
      title: 'Medicina I',
      description:
        '(Cardiología, Gastroenterología, Infectología, Neumología, Nefrología): Cada área se centra en el diagnóstico, manejo y tratamiento de enfermedades específicas del corazón, tracto gastrointestinal, infecciones, pulmones y riñones, respectivamente.',
      imageKey: '/media/courses/MED-126.webp',
      tag: 'VII CICLO',
      category: 'ciencias-clinicas',
    },
    {
      id: 'FARC-127',
      title: 'Farmacología Clínica',
      description:
        'Aplica conocimientos farmacológicos en la práctica clínica, incluyendo la terapia farmacológica en pacientes, farmacovigilancia y prescripción de fármacos basada en evidencia.',
      imageKey: '/media/courses/FARC-127.webp',
      tag: 'VII CICLO',
      category: 'ciencias-clinicas',
    },
    {
      id: 'MED-128',
      title: 'Medicina II',
      description:
        '(Dermatología, Reumatología, Neurología, Hematología, Endocrinología): Estudia enfermedades cutáneas, reumáticas, neurológicas, hematológicas y endocrinas, profundizando en diagnósticos y tratamientos de afecciones específicas.',
      imageKey: '/media/courses/MED-128.webp',
      tag: 'VIII CICLO',
      category: 'ciencias-clinicas',
    },
    {
      id: 'CIR-129',
      title: 'Cirugía I',
      description:
        '(Cirugía General y Especialidades Quirúrgicas): Cubre técnicas quirúrgicas generales y especializadas, como cirugía abdominal, torácica, vascular, plástica, ortopédica y otras subespecialidades quirúrgicas.',
      imageKey: '/media/courses/CIR-129.webp',
      tag: 'IX CICLO',
      category: 'ciencias-quirurgicas',
    },
    {
      id: 'CIR-130',
      title: 'Cirugía II',
      description:
        '(Oftalmología, Neurocirugía, Otorrinolaringología, Urología): Se enfoca en procedimientos quirúrgicos específicos para ojos, cerebro, oídos, nariz, garganta, tracto urológico y reproductor masculino.',
      imageKey: '/media/courses/CIR-130.webp',
      tag: 'X CICLO',
      category: 'ciencias-quirurgicas',
    },
  ])

  await db.insert(Team).values([
    {
      id: 1,
      name: 'Guissepi Villegas Merino',
      title: 'Co-Fundador',
      avatarKey: '/media/team/1.webp',
    },
    {
      id: 2,
      name: 'Miguel Rodriguez Anticona',
      title: 'Co-Fundador',
      avatarKey: '/media/team/2.webp',
    },
    {
      id: 4,
      name: 'Cristian Idrogo Zamora',
      title: 'Docente BG',
      avatarKey: '/media/team/4.webp',
    },
    {
      id: 5,
      name: 'Diana Calipuy Villacorta',
      title: 'Docente BG',
      avatarKey: '/media/team/5.webp',
    },
    {
      id: 6,
      name: 'Jair Campos Ortecho',
      title: 'Docente BG',
      avatarKey: '/media/team/6.webp',
    },
    {
      id: 7,
      name: 'David Pastor Bazan',
      title: 'Docente BG',
      avatarKey: '/media/team/7.webp',
    },
    {
      id: 8,
      name: 'Lennon Paredes Diaz',
      title: 'Docente BG',
      avatarKey: '/media/team/8.webp',
    },
    {
      id: 9,
      name: 'Rafael Sanchez Robles',
      title: 'Docente BG',
      avatarKey: '/media/team/9.webp',
    },
    {
      id: 10,
      name: 'Lic. Max Bolaños Rojas',
      title: 'Docente BG',
      avatarKey: '/media/team/10.webp',
    },
    {
      id: 14,
      name: 'Cesia Luna Cordova',
      title: 'Docente BG',
      avatarKey: '/media/team/14.webp',
    },
    {
      id: 16,
      name: 'Alvaro Retto Hernandez',
      title: 'Docente BG',
      avatarKey: '/media/team/16.webp',
    },
  ])
}
