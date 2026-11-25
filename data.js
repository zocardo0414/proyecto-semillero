const COURSE_DATA = {
  orcid: {
    name: "ORCID",
    accent: "#a6ce39",
    lessons: [
      {
        id: "orcid-1",
        title: "¿Qué es ORCID y por qué todo investigador necesita uno?",
        duration: "3 min",
        challenge: "Busca tu nombre en Google Scholar o ORCID y verifica si existen otros autores con tu mismo nombre.",
        scenes: [
          {
            tag: "Escena 1 · El problema",
            heading: "Homónimos y pérdida de autoría",
            body: "Si dos investigadores se llaman igual, las bases de datos suelen mezclar sus publicaciones. Además, si cambias de universidad o de correo, tu historial puede quedar fragmentado.",
            tip: "ORCID te asigna un código único de 16 dígitos (ej. 0000-0002-1825-0097) que te acompaña toda la vida."
          },
          {
            tag: "Escena 2 · La solución",
            heading: "Un pasaporte digital para tu producción científica",
            body: "ORCID conecta tus artículos, proyectos, afiliaciones y premios en un solo lugar, sin importar en qué revista publiques o en qué institución trabajes.",
            tip: "Hoy en día casi todas las revistas científicas y convocatorias piden tu ORCID."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Cuál es la principal ventaja de tener un identificador ORCID?",
            options: [
              "Sirve únicamente para buscar artículos en PDF gratis",
              "Te da un identificador único y permanente que evita confusiones con otros autores",
              "Reemplaza por completo la hoja de vida institucional"
            ],
            correct: 1,
            explanation: "¡Correcto! ORCID distingue tu producción científica de la de cualquier otro autor con nombre similar."
          }
        ]
      },
      {
        id: "orcid-2",
        title: "Registro paso a paso y configuración de correos (personal e institucional)",
        duration: "4 min",
        challenge: "Ingresa a orcid.org, crea tu cuenta y registra tanto tu correo institucional como uno personal de respaldo.",
        scenes: [
          {
            tag: "Escena 1 · Registro",
            heading: "Creando tu cuenta en orcid.org",
            body: "Entra a orcid.org y haz clic en 'Registrarse'. Solo necesitas tu nombre, apellido y un correo electrónico.",
            tip: "Usa el nombre completo tal como firmas tus artículos académicos.",
            image: "assets/orcid_registro.svg"
          },
          {
            tag: "Escena 2 · Correos",
            heading: "Correo institucional + correo personal",
            body: "Agrega tu correo institucional para validar tu afiliación, pero añade también un correo personal (Gmail/Outlook) por si algún día cambias de institución.",
            tip: "Nunca pierdas el acceso a tu ORCID por graduarte o cambiar de trabajo.",
            image: "assets/orcid_registro.svg"
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Por qué se recomienda agregar un correo personal además del institucional en ORCID?",
            options: [
              "Para recibir el doble de notificaciones",
              "Para no perder el acceso a tu cuenta si dejas la institución",
              "Porque ORCID no acepta correos institucionales"
            ],
            correct: 1,
            explanation: "¡Exacto! Tu ORCID es para toda la vida; tener un correo personal asegura que siempre puedas recuperarlo."
          }
        ]
      },
      {
        id: "orcid-3",
        title: "Control de privacidad: qué mostrar y qué mantener privado",
        duration: "3 min",
        challenge: "Revisa la visibilidad de tus datos en ORCID y asegúrate de que tu nombre y trabajos estén en verde (Público).",
        scenes: [
          {
            tag: "Escena 1 · Los 3 colores",
            heading: "Verde, amarillo y rojo en ORCID",
            body: "Cada sección de tu perfil tiene tres niveles de visibilidad: Público (verde), Partes de confianza (amarillo) y Privado (rojo).",
            tip: "Si dejas tus publicaciones en rojo, nadie podrá verlas cuando compartas tu enlace.",
            image: "assets/orcid_privacidad.svg"
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "Si quieres que cualquier revista o evaluador vea tus publicaciones en tu enlace ORCID, ¿qué nivel debes elegir?",
            options: [
              "Privado (rojo)",
              "Solo partes de confianza (amarillo)",
              "Público (verde)"
            ],
            correct: 2,
            explanation: "¡Muy bien! El ícono verde (Público) permite que cualquier persona consulte tu producción."
          }
        ]
      },
      {
        id: "orcid-4",
        title: "Completar tu perfil: afiliación, educación y palabras clave",
        duration: "4 min",
        challenge: "Agrega tu universidad actual en la sección 'Empleo' o 'Educación' y añade al menos 3 palabras clave de tu área.",
        scenes: [
          {
            tag: "Escena 1 · Perfil completo",
            heading: "Más que solo un número",
            body: "Un perfil vacío genera poca confianza. Completa tu biografía breve, tu formación académica, tu afiliación actual y tus palabras clave de investigación.",
            tip: "Usa el buscador automático de instituciones para que el nombre de tu universidad quede estandarizado."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Para qué sirven las 'Palabras clave' en tu perfil ORCID?",
            options: [
              "Son contraseñas secundarias",
              "Ayudan a que otros investigadores te encuentren por tu tema de estudio",
              "Son obligatorias para descargar certificados"
            ],
            correct: 1,
            explanation: "¡Correcto! Facilitan que pares académicos y semilleros te ubiquen por línea de investigación."
          }
        ]
      },
      {
        id: "orcid-5",
        title: "Agregar y sincronizar publicaciones automáticamente (Crossref, Scopus, BibTeX)",
        duration: "5 min",
        challenge: "En la sección 'Trabajos', prueba la opción 'Buscar y enlazar' con Crossref para importar tus publicaciones.",
        scenes: [
          {
            tag: "Escena 1 · Sin digitación manual",
            heading: "Importa tus trabajos en segundos",
            body: "En lugar de escribir cada artículo a mano, usa 'Agregar trabajos → Buscar y enlazar' (Crossref, DataCite, Scopus) o sube un archivo BibTeX.",
            tip: "Si tu artículo tiene DOI, puedes importarlo automáticamente sin errores de tipeo.",
            image: "assets/orcid_trabajos.svg"
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Cuál es la forma más rápida y precisa de cargar un artículo que ya tiene DOI?",
            options: [
              "Escribir todos los datos manualmente",
              "Importarlo mediante 'Buscar y enlazar' (Crossref) o por su DOI",
              "Subir una captura de pantalla del PDF"
            ],
            correct: 1,
            explanation: "¡Exacto! Usar el DOI o Crossref trae los metadatos oficiales automáticamente."
          }
        ]
      },
      {
        id: "orcid-6",
        title: "Buenas prácticas: mantener tu ORCID actualizado y conectarlo con otras plataformas",
        duration: "3 min",
        challenge: "Copia tu URL de ORCID (https://orcid.org/...) y guárdala para vincularla luego en CvLAC y en tu firma de correo.",
        scenes: [
          {
            tag: "Escena 1 · Ecosistema conectado",
            heading: "Tu ORCID como centro de tu identidad",
            body: "Autoriza a plataformas confiables (como Crossref o sistemas editoriales) para que actualicen tu ORCID automáticamente cada vez que publiques.",
            tip: "Incluye tu enlace ORCID en presentaciones, pósteres y en tu perfil de CvLAC."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Qué práctica mantiene tu ORCID actualizado con menos esfuerzo?",
            options: [
              "Crear una cuenta nueva cada año",
              "Autorizar a entidades de confianza como Crossref para que sincronicen tus nuevos artículos",
              "Dejar el perfil en modo privado"
            ],
            correct: 1,
            explanation: "¡Perfecto! La sincronización automática ahorra tiempo y evita olvidos."
          }
        ]
      }
    ]
  },

  cvlac: {
    name: "CvLAC",
    accent: "#3b82f6",
    lessons: [
      {
        id: "cvlac-1",
        title: "Introducción a CvLAC y su rol en el ecosistema ScienTI / GrupLAC",
        duration: "4 min",
        challenge: "Identifica el nombre exacto de tu semillero o grupo de investigación en la plataforma ScienTI.",
        scenes: [
          {
            tag: "Escena 1 · Ecosistema ScienTI",
            heading: "¿Qué es CvLAC?",
            body: "CvLAC (Currículum Vitae de Latinoamérica y el Caribe) es la hoja de vida oficial de investigadores en Colombia (Minciencias). Se conecta directamente con GrupLAC (grupos) e InstituLAC (instituciones).",
            tip: "Si perteneces a un semillero vinculado a un grupo de investigación, tu CvLAC alimenta los indicadores del grupo."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Con qué plataforma se conecta directamente tu CvLAC para reportar la producción de un grupo de investigación?",
            options: [
              "GrupLAC",
              "Google Drive",
              "LinkedIn"
            ],
            correct: 0,
            explanation: "¡Correcto! CvLAC alimenta a GrupLAC dentro del ecosistema ScienTI."
          }
        ]
      },
      {
        id: "cvlac-2",
        title: "Primer ingreso, datos personales y áreas de actuación",
        duration: "4 min",
        challenge: "Ingresa a CvLAC y verifica que tu documento de identidad, nombre en citaciones y áreas de actuación estén completos.",
        scenes: [
          {
            tag: "Escena 1 · Datos básicos",
            heading: "Configuración inicial sin errores",
            body: "Al registrarte, verifica cuidadosamente tu número de documento y define cómo apareces citado en tus artículos (ej. Pérez, J.).",
            tip: "Selecciona tus áreas de actuación (OCDE) acorde con la línea de tu semillero."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Por qué es importante registrar correctamente tu 'Nombre en citaciones' en CvLAC?",
            options: [
              "Solo por estética",
              "Para que el sistema reconozca tus publicaciones al cruzar datos",
              "Para cambiar tu contraseña"
            ],
            correct: 1,
            explanation: "¡Exacto! Facilita la validación y el cruce de tu producción bibliográfica."
          }
        ]
      },
      {
        id: "cvlac-3",
        title: "Registro de formación académica y experiencia profesional",
        duration: "4 min",
        challenge: "Registra tu programa académico actual (pregrado o posgrado) en la sección 'Formación Académica'.",
        scenes: [
          {
            tag: "Escena 1 · Trayectoria",
            heading: "Formación académica y experiencia",
            body: "En 'Formación Académica' registra tus estudios en curso o finalizados. Si eres estudiante de semillero, puedes registrar tu pregrado indicando que está en curso.",
            tip: "Mantén actualizadas las fechas de inicio y fin para evitar inconsistencias."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "Si aún estás cursando tu carrera universitaria, ¿puedes registrarla en CvLAC?",
            options: [
              "No, solo se registran doctorados",
              "Sí, indicando la fecha de inicio y que está en curso",
              "Solo cuando te gradúes"
            ],
            correct: 1,
            explanation: "¡Correcto! Puedes registrar formación en curso sin problema."
          }
        ]
      },
      {
        id: "cvlac-4",
        title: "Cómo cargar producción bibliográfica (artículos, libros, ponencias)",
        duration: "5 min",
        challenge: "Prepara los datos de un artículo o ponencia (título, año, ISSN/ISBN, DOI) y ubícalo en la categoría correspondiente.",
        scenes: [
          {
            tag: "Escena 1 · Producción bibliográfica",
            heading: "Artículos, capítulos y libros",
            body: "Cada producto exige metadatos específicos: en artículos necesitas ISSN, volumen, páginas y DOI; en libros, el ISBN y la editorial.",
            tip: "Un producto sin ISSN/ISBN o sin coautores completos puede quedar sin validar en convocatorias.",
            image: "assets/cvlac_produccion.svg"
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Qué dato es clave al registrar un artículo científico en CvLAC?",
            options: [
              "El color de la portada de la revista",
              "El ISSN de la revista y el DOI del artículo",
              "El número de páginas del currículum"
            ],
            correct: 1,
            explanation: "¡Muy bien! El ISSN y el DOI permiten verificar la existencia y calidad del artículo."
          }
        ]
      },
      {
        id: "cvlac-5",
        title: "Registro de otros productos: software, eventos y apropiación social",
        duration: "4 min",
        challenge: "Revisa la sección de 'Participación en eventos' y registra el último congreso o encuentro de semilleros al que asististe.",
        scenes: [
          {
            tag: "Escena 1 · Más allá de los artículos",
            heading: "Software, ponencias y apropiación social",
            body: "CvLAC también valora desarrollos de software, prototipos, participación en eventos científicos (ponencias) y actividades de apropiación social del conocimiento.",
            tip: "Guarda siempre los certificados de tus ponencias en semilleros; te pedirán fecha, ciudad e institución organizadora."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Dónde registrarías tu participación como ponente en un encuentro de semilleros?",
            options: [
              "En apropiación social / participación en eventos científicos",
              "En formación complementaria",
              "No se puede registrar"
            ],
            correct: 0,
            explanation: "¡Correcto! Las ponencias y eventos tienen su propia sección en CvLAC."
          }
        ]
      },
      {
        id: "cvlac-6",
        title: "Vinculación de CvLAC con ORCID y errores comunes al postularse a convocatorias",
        duration: "5 min",
        challenge: "Vincula tu ID de ORCID en la sección de 'Identificadores de autor' dentro de tu CvLAC.",
        scenes: [
          {
            tag: "Escena 1 · Vínculo y errores frecuentes",
            heading: "Conecta ORCID y evita rechazos",
            body: "En CvLAC puedes agregar tu enlace ORCID. Además, antes de cerrar una convocatoria, revisa que no tengas productos duplicados ni coautores faltantes.",
            tip: "Error común: olvidar vincular el producto al grupo de investigación desde GrupLAC."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Cuál es uno de los errores más frecuentes al postularse con CvLAC?",
            options: [
              "Tener el perfil actualizado",
              "Dejar productos incompletos (sin DOI/ISSN) o duplicados",
              "Vincular el ORCID"
            ],
            correct: 1,
            explanation: "¡Exacto! Los registros incompletos o duplicados suelen quedar por fuera de la evaluación."
          }
        ]
      }
    ]
  },

  scholar: {
    name: "Google Scholar",
    accent: "#60a5fa",
    lessons: [
      {
        id: "scholar-1",
        title: "Diferencia entre buscar en Google Scholar y tener un perfil de autor",
        duration: "3 min",
        challenge: "Busca un tema de tu semillero en scholar.google.com y haz clic en el nombre subrayado de algún autor para ver su perfil.",
        scenes: [
          {
            tag: "Escena 1 · Dos caras de Scholar",
            heading: "Buscador vs. Perfil de Autor",
            body: "Cualquiera puede buscar artículos en Google Scholar, pero tener un 'Perfil de Autor' reúne todas tus publicaciones bajo tu nombre y calcula tus citas automáticamente.",
            tip: "Tener perfil te hace visible cuando otros buscan expertos en tu área."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Qué ventaja tiene crear un Perfil de Autor en Google Scholar?",
            options: [
              "Te da acceso gratuito a todas las bases de datos pagas",
              "Agrupa tus publicaciones y muestra tus métricas de citas en tiempo real",
              "Reemplaza el registro en Minciencias"
            ],
            correct: 1,
            explanation: "¡Correcto! Centraliza tu producción y calcula tus citas automáticamente."
          }
        ]
      },
      {
        id: "scholar-2",
        title: "Creación del perfil y verificación obligatoria con correo institucional",
        duration: "4 min",
        challenge: "Inicia la creación de tu perfil en 'Mi perfil' y verifica tu cuenta usando tu correo institucional.",
        scenes: [
          {
            tag: "Escena 1 · Verificación",
            heading: "El correo institucional es obligatorio para ser visible",
            body: "Puedes crear el perfil con tu Gmail, pero Google Scholar exige verificar un correo institucional (ej. @universidad.edu.co) para que tu perfil aparezca en los resultados públicos.",
            tip: "Si no verificas el correo institucional, nadie más podrá encontrar tu perfil."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Qué ocurre si creas tu perfil en Google Scholar pero NO verificas un correo institucional?",
            options: [
              "Tu perfil no aparecerá en las búsquedas públicas",
              "Se borran tus artículos",
              "No pasa nada, funciona igual"
            ],
            correct: 0,
            explanation: "¡Exacto! La verificación institucional es requisito para que el perfil sea público."
          }
        ]
      },
      {
        id: "scholar-3",
        title: "Selección de artículos propios y configuración de actualizaciones (automática vs. manual)",
        duration: "4 min",
        challenge: "Configura tu perfil en 'Actualización por correo electrónico' (revisión manual) para evitar que entren artículos de homónimos.",
        scenes: [
          {
            tag: "Escena 1 · Control de calidad",
            heading: "¿Actualización automática o manual?",
            body: "Google Scholar puede agregar artículos automáticamente, pero si tienes un nombre común, puede añadir trabajos de otras personas. La opción 'Enviarme un correo para revisar' es la más segura.",
            tip: "Revisar antes de aceptar mantiene tu perfil limpio y confiable."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Qué opción de actualización es más recomendable si existen otros autores con tu mismo nombre?",
            options: [
              "Actualización automática sin revisión",
              "Revisar por correo electrónico antes de añadir artículos",
              "Desactivar el perfil"
            ],
            correct: 1,
            explanation: "¡Muy bien! Así apruebas solo los artículos que realmente son tuyos."
          }
        ]
      },
      {
        id: "scholar-4",
        title: "Limpieza del perfil: cómo fusionar duplicados y eliminar artículos ajenos",
        duration: "4 min",
        challenge: "Revisa tu lista de artículos y verifica si hay versiones duplicadas (preprint + versión publicada) para fusionarlas.",
        scenes: [
          {
            tag: "Escena 1 · Mantenimiento",
            heading: "Fusionar duplicados",
            body: "A veces un mismo artículo aparece dos veces (por ejemplo, en un repositorio y en la revista). Selecciona ambos con la casilla y haz clic en 'Combinar' para sumar sus citas.",
            tip: "Si ves un artículo que no es tuyo, selecciónalo y haz clic en 'Eliminar'.",
            image: "assets/scholar_combinar.svg"
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "Si un mismo artículo aparece dos veces en tu perfil, ¿qué debes hacer?",
            options: [
              "Eliminar ambos",
              "Seleccionarlos y usar la opción 'Combinar' para unificar sus citas",
              "Dejarlos así para tener más artículos"
            ],
            correct: 1,
            explanation: "¡Correcto! Combinar unifica el registro y suma todas las citas en un solo lugar."
          }
        ]
      },
      {
        id: "scholar-5",
        title: "Entendiendo tus métricas: citas totales, Índice h e Índice i10",
        duration: "4 min",
        challenge: "Observa el cuadro de métricas de un investigador en Google Scholar e identifica su Índice h.",
        scenes: [
          {
            tag: "Escena 1 · Métricas clave",
            heading: "¿Qué significan h e i10?",
            body: "El Índice h mide productividad e impacto: tienes índice h = 5 si tienes 5 artículos con al menos 5 citas cada uno. El Índice i10 cuenta cuántos artículos tienen al menos 10 citas.",
            tip: "No te obsesiones con el número al inicio; en semilleros lo importante es empezar a publicar y citar bien."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "Si un investigador tiene 4 artículos y cada uno tiene 6 citas, ¿cuál es su Índice h?",
            options: [
              "6",
              "4",
              "24"
            ],
            correct: 1,
            explanation: "¡Excelente! Tiene 4 artículos con al menos 4 citas cada uno, así que su índice h es 4."
          }
        ]
      },
      {
        id: "scholar-6",
        title: "Cómo usar Google Scholar para aumentar la visibilidad de tu semillero",
        duration: "3 min",
        challenge: "Agrega el nombre oficial de tu semillero o grupo en tu afiliación o áreas de interés y comparte tu enlace público.",
        scenes: [
          {
            tag: "Escena 1 · Trabajo en red",
            heading: "Visibilidad colectiva",
            body: "Cuando todos los integrantes del semillero tienen su perfil verificado y enlazan sus trabajos, las publicaciones del grupo ganan mayor alcance y citación.",
            tip: "Comparte tu perfil de Google Scholar junto con tu ORCID en las redes académicas."
          },
          {
            type: "quiz",
            tag: "Pausa interactiva",
            question: "¿Cómo ayuda Google Scholar a un semillero de investigación?",
            options: [
              "Aumenta la visibilidad y facilita que otros encuentren y citen los trabajos del grupo",
              "Financia automáticamente los proyectos",
              "Publica artículos sin revisión por pares"
            ],
            correct: 0,
            explanation: "¡Exacto! Mejora la visibilidad académica de todo el semillero."
          }
        ]
      }
    ]
  }
};
