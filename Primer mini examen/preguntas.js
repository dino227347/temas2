const preguntas = [

    // ============================================================
    // QUÍMICA - Tema 2: Materia y Energía (Preguntas 1-10)
    // ============================================================
    {
        "id": 1,
        "pregunta": "Considerando la definición moderna de materia, ¿cuál de las siguientes afirmaciones representa correctamente la relación entre masa y energía según la teoría de la relatividad y la química moderna?",
        "opciones": [
            "La masa y la energía son entidades completamente independientes que no pueden transformarse entre sí",
            "La masa es una forma condensada de energía, y su equivalencia se expresa mediante E = mc², lo que implica que en reacciones nucleares hay una conversión mensurable entre ambas",
            "La energía es una propiedad exclusiva de los sistemas en movimiento, mientras que la masa solo existe en estado de reposo",
            "La masa y la energía son intercambiables únicamente en reacciones químicas convencionales, pero no en procesos nucleares"
        ],
        "correcta": 1
    },
    {
        "id": 2,
        "pregunta": "Un investigador somete una muestra de hierro a un proceso de oxidación controlada. Durante el experimento, observa que la masa total del sistema aumenta en 2.3 g. ¿Cuál de las siguientes interpretaciones es correcta desde el punto de vista de las propiedades químicas y físicas de la materia?",
        "opciones": [
            "El aumento de masa viola la ley de conservación de la masa, por lo que el experimento debe tener un error sistemático",
            "El aumento de masa se debe a la ganancia de oxígeno del ambiente, lo que constituye una propiedad química (oxidabilidad) del hierro, y no contradice la ley de conservación porque el sistema abierto intercambia materia con el entorno",
            "El aumento de masa es una propiedad física extensiva que demuestra que el hierro puede crear materia nueva",
            "La oxidación del hierro es un proceso físico porque no hay cambio en la composición atómica del material"
        ],
        "correcta": 0
    },
    {
        "id": 3,
        "pregunta": "Un estudiante afirma que 'el punto de ebullición del agua es siempre 100°C'. Desde la perspectiva de las propiedades intensivas y la dependencia de la presión atmosférica, ¿cuál es el análisis más preciso de esta afirmación?",
        "opciones": [
            "Es correcta porque el punto de ebullición es una propiedad intensiva independiente de la presión",
            "Es incorrecta porque el punto de ebullición depende de la presión atmosférica y varía con la altitud",
            "Es correcta solo para el agua pura a 1 atm de presión, pero varía si hay impurezas",
            "Es incorrecta porque la temperatura de ebullición es una propiedad extensiva"
        ],
        "correcta": 2
    },
    {
        "id": 4,
        "pregunta": "Se tiene un sistema cerrado que contiene una sustancia pura en estado sólido. Se le aplica calor de manera constante y se registra la temperatura en función del tiempo. El gráfico muestra una zona donde la temperatura permanece constante durante varios minutos. ¿Qué fenómeno explica esta meseta térmica?",
        "opciones": [
            "La sustancia está absorbiendo calor sin aumentar su temperatura porque la energía se utiliza para aumentar la energía cinética de las moléculas",
            "La sustancia está absorbiendo calor sin aumentar su temperatura porque la energía se utiliza para romper las fuerzas intermoleculares durante el cambio de estado",
            "La sustancia está perdiendo calor al ambiente a la misma velocidad que lo absorbe",
            "La sustancia ha alcanzado su temperatura máxima posible y no puede calentarse más"
        ],
        "correcta": 1
    },
    {
        "id": 5,
        "pregunta": "Un compuesto químico presenta las siguientes características: se descompone al calentarse a 200°C formando dos sustancias más simples, es un mal conductor de la electricidad en estado sólido, y su punto de fusión es de 180°C. ¿Cuál de las siguientes clasificaciones es la más adecuada para esta sustancia?",
        "opciones": [
            "Es un elemento porque no se puede descomponer por métodos físicos",
            "Es un compuesto porque puede descomponerse químicamente en sustancias más simples",
            "Es una mezcla homogénea porque tiene un punto de fusión definido",
            "Es una mezcla heterogénea porque no conduce electricidad"
        ],
        "correcta": 3
    },
    {
        "id": 6,
        "pregunta": "Durante un proceso de fisión nuclear controlada en un reactor, se observa que la masa total de los productos es ligeramente menor que la masa de los reactantes. ¿Cuál de las siguientes afirmaciones explica correctamente este fenómeno desde la perspectiva de la relación materia-energía?",
        "opciones": [
            "La masa perdida se convierte en energía según la ecuación E = mc², demostrando que la materia y la energía son intercambiables",
            "La masa perdida indica que hay una falla en la medición experimental, porque la masa siempre se conserva",
            "La masa perdida se transforma en neutrinos que escapan del sistema",
            "La energía liberada proviene únicamente de la energía química de los enlaces atómicos"
        ],
        "correcta": 0
    },
    {
        "id": 7,
        "pregunta": "Se dispone de tres muestras: (1) agua destilada, (2) solución de NaCl al 5% y (3) agua de mar. ¿Cuál de los siguientes planteamientos sobre el punto de congelación y la temperatura de ebullición es correcto?",
        "opciones": [
            "Muestra 1 > Muestra 2 > Muestra 3 en punto de congelación",
            "Muestra 1 < Muestra 2 < Muestra 3 en punto de ebullición",
            "Muestra 1 > Muestra 2 > Muestra 3 en punto de congelación y Muestra 1 < Muestra 2 < Muestra 3 en punto de ebullición",
            "Muestra 1 = Muestra 2 = Muestra 3 en ambas propiedades porque todas son agua"
        ],
        "correcta": 2
    },
    {
        "id": 8,
        "pregunta": "Un ingeniero químico diseña un sistema para generar energía utilizando la fuerza del viento. Durante el diseño, debe considerar que la energía eólica:",
        "opciones": [
            "Es una forma de energía química almacenada en las moléculas del aire",
            "Es energía cinética del movimiento del aire, que se transforma en energía mecánica y luego en eléctrica",
            "Es energía potencial gravitatoria generada por la altura de las torres de viento",
            "Es energía radiante proveniente del Sol, que calienta el aire y genera movimiento"
        ],
        "correcta": 3
    },
    {
        "id": 9,
        "pregunta": "Un recipiente contiene un gas ideal a 2 atm de presión y 300 K. Se reduce el volumen a la mitad manteniendo la temperatura constante. Posteriormente, se duplica la presión manteniendo el volumen constante. ¿Cuál de las siguientes afirmaciones describe correctamente el comportamiento del gas y el tipo de energía involucrada?",
        "opciones": [
            "La temperatura final es 600 K, y la energía cinética de las moléculas se duplica",
            "La temperatura final es 300 K, y la energía potencial de las moléculas aumenta",
            "La temperatura final es 1200 K, y la energía cinética de las moléculas se cuadruplica",
            "La temperatura final es 600 K, y la energía potencial de las moléculas disminuye"
        ],
        "correcta": 2
    },
    {
        "id": 10,
        "pregunta": "En el estado gaseoso, los choques entre moléculas se consideran perfectamente elásticos. ¿Qué implicación tiene esto para la energía del sistema y qué tipo de fuerzas predominan?",
        "opciones": [
            "Las moléculas pierden energía en cada choque, predominando las fuerzas de atracción",
            "Las moléculas ganan energía en cada choque, predominando las fuerzas de repulsión",
            "No se pierde ni se gana energía en los choques, y la energía cinética es considerablemente mayor que la energía potencial",
            "Las moléculas se fusionan al chocar, y la energía potencial es mayor que la cinética"
        ],
        "correcta": 0
    },

    // ============================================================
    // ANATOMÍA - Tema 1: Introducción a la Anatomía (Preguntas 11-20)
    // ============================================================
    {
        "id": 11,
        "pregunta": "Un paciente presenta una herida penetrante en la región anterolateral del muslo derecho, a 15 cm por debajo del trocánter mayor, que ha lesionado el nervio femoral. ¿Cuál de las siguientes afirmaciones describe correctamente la ubicación y el tipo de estructura dañada?",
        "opciones": [
            "La herida es medial y proximal al tronco, y el nervio afectado pertenece al sistema nervioso central",
            "La herida es lateral y proximal al tronco, y el nervio afectado pertenece al sistema nervioso periférico (plexo lumbar, L2-L4)",
            "La herida es anterior y distal al tronco, y el nervio afectado pertenece al sistema nervioso autónomo",
            "La herida es lateral y distal al tronco, y el nervio afectado pertenece al sistema nervioso periférico (plexo sacro, L4-S3)"
        ],
        "correcta": 2
    },
    {
        "id": 12,
        "pregunta": "Un estudiante está estudiando el sistema nervioso y encuentra que los impulsos nerviosos viajan a velocidades de hasta 120 m/s en fibras mielinizadas. Basándose en la división de la anatomía, ¿qué rama de la anatomía sería la más adecuada para estudiar la relación entre la estructura de la mielina y la velocidad de conducción?",
        "opciones": [
            "Anatomía de superficie, porque la mielina se puede palpar externamente",
            "Histología, porque el estudio de la mielina requiere microscopía para observar la estructura celular de las células de Schwann y los oligodendrocitos",
            "Anatomía topográfica, porque se requiere estudiar la región donde se encuentran los nervios",
            "Embriología, porque la mielina solo se forma durante el desarrollo embrionario"
        ],
        "correcta": 3
    },
    {
        "id": 13,
        "pregunta": "Un paciente de 65 años presenta dificultad para la dorsiflexión del pie, lo que le provoca una marcha llamada 'steppage' (levantar excesivamente el pie para evitar arrastrar los dedos). El examen neurológico revela una lesión en el nervio peroneo común. ¿Cuál de las siguientes descripciones es correcta?",
        "opciones": [
            "La dorsiflexión es un movimiento que separa el pie del plano medio (abducción) y el nervio peroneo común es contralateral al nervio tibial",
            "La dorsiflexión es un movimiento que acerca la punta del pie a la pierna (flexión dorsal) y el nervio peroneo común es ipsilateral al nervio tibial",
            "La dorsiflexión es un movimiento de eversión del pie y el nervio peroneo común es contralateral al nervio femoral",
            "La dorsiflexión es un movimiento de flexión plantar y el nervio peroneo común es proximal al tronco"
        ],
        "correcta": 0
    },
    {
        "id": 14,
        "pregunta": "Un médico describe en un informe que una masa tumoral se encuentra en el 'mediastino superior izquierdo, posterior al manubrio esternal, a 3 cm de la línea media'. ¿Cuál de los siguientes planos anatómicos se está utilizando como referencia principal para esta localización?",
        "opciones": [
            "Plano horizontal y plano sagital",
            "Plano frontal y plano horizontal",
            "Plano sagital y plano frontal",
            "Plano medio y plano horizontal"
        ],
        "correcta": 3
    },
    {
        "id": 15,
        "pregunta": "Un paciente presenta una herida en la región posterior del brazo izquierdo que ha seccionado el tendón del músculo tríceps braquial. ¿Cuál de los siguientes movimientos se verá afectado y cuál es la relación anatómica correcta?",
        "opciones": [
            "La flexión del codo se verá afectada porque el tríceps es un flexor; el brazo es proximal al antebrazo",
            "La extensión del codo se verá afectada porque el tríceps es un extensor; el brazo es proximal al antebrazo",
            "La pronación del antebrazo se verá afectada porque el tríceps participa en la pronación; el brazo es distal al hombro",
            "La supinación del antebrazo se verá afectada porque el tríceps participa en la supinación; el brazo es ipsilateral al antebrazo"
        ],
        "correcta": 2
    },
    {
        "id": 16,
        "pregunta": "Durante una disección, un estudiante identifica una estructura que se encuentra en el mediastino medio, ligeramente a la izquierda de la línea media. Esta estructura está cubierta por el pericardio fibroso. ¿Cuál es la estructura y qué relación anatómica tiene con el pulmón izquierdo?",
        "opciones": [
            "La vena cava superior; es ipsilateral al pulmón izquierdo",
            "La tráquea; es contralateral al pulmón izquierdo",
            "El corazón; es ipsilateral al pulmón izquierdo porque ambos están en el lado izquierdo",
            "El esófago; es contralateral al pulmón izquierdo"
        ],
        "correcta": 1
    },
    {
        "id": 17,
        "pregunta": "Un paciente sufre una fractura del húmero a nivel del surco del nervio radial (surco espiral). El examen neurológico revela 'muñeca caída' (wrist drop). ¿Qué relación anatómica describe correctamente la ubicación de esta lesión?",
        "opciones": [
            "La lesión es distal al codo y el nervio afectado es el nervio mediano (C5-T1)",
            "La lesión es proximal al codo y el nervio afectado es el nervio radial (C5-T1), que es ipsilateral al húmero",
            "La lesión es proximal al codo y el nervio afectado es el nervio ulnar (C8-T1), que es contralateral al húmero",
            "La lesión es en el tercio distal del húmero y el nervio afectado es el nervio radial (C6-C8)"
        ],
        "correcta": 0
    },
    {
        "id": 18,
        "pregunta": "Un estudiante analiza el desarrollo embrionario y encuentra que el sistema nervioso se origina a partir del ectodermo. ¿Qué rama de la anatomía estudia este proceso y qué estructuras derivan de este origen?",
        "opciones": [
            "Anatomía microscópica, porque el sistema nervioso es microscópico",
            "Embriología; el sistema nervioso deriva del tubo neural (ectodermo), que da origen al encéfalo y la médula espinal",
            "Anatomía topográfica, porque se estudia por regiones",
            "Histología, porque se estudian las neuronas al microscopio"
        ],
        "correcta": 2
    },
    {
        "id": 19,
        "pregunta": "Un cirujano debe realizar una incisión en la región anterior del cuello para acceder a la tráquea. ¿Qué división de la anatomía proporciona la información más relevante para este procedimiento en términos de relaciones espaciales y estructuras adyacentes?",
        "opciones": [
            "Anatomía descriptiva, porque describe la tráquea como un tubo cartilaginoso",
            "Anatomía topográfica, porque estudia las relaciones entre estructuras en la región cervical (tráquea, esófago, vasos, nervios, tiroides)",
            "Anatomía microscópica, porque se necesita observar el epitelio traqueal",
            "Embriología, porque se necesita conocer el desarrollo de la tráquea"
        ],
        "correcta": 1
    },
    {
        "id": 20,
        "pregunta": "Un paciente presenta una lesión en el plexo braquial que afecta la capacidad de aducción del hombro. ¿Qué músculo está afectado y qué movimiento específico se ve comprometido?",
        "opciones": [
            "El deltoides, que realiza aducción del hombro (movimiento que acerca el brazo al plano medio)",
            "El pectoral mayor, que realiza aducción del hombro (movimiento que acerca el brazo al plano medio)",
            "El deltoides, que realiza abducción del hombro (movimiento que aleja el brazo del plano medio)",
            "El supraespinoso, que realiza rotación externa del hombro"
        ],
        "correcta": 3
    },

    // ============================================================
    // BIOLOGÍA - Tema 3: Membrana Celular (Preguntas 21-30)
    // ============================================================
    {
        "id": 21,
        "pregunta": "Durante un experimento de laboratorio, se coloca una célula animal en una solución hipertónica. Transcurridos 30 minutos, se observa que la célula ha perdido volumen significativamente. ¿Cuál de los siguientes mecanismos explica este fenómeno y qué propiedad de la membrana celular está involucrada?",
        "opciones": [
            "La célula pierde agua por difusión simple a través de la bicapa lipídica, moviéndose de una región de menor concentración de solutos (intracelular) a una de mayor concentración (extracelular), lo que demuestra la permeabilidad selectiva de la membrana",
            "La célula gana agua por difusión facilitada a través de acuaporinas, moviéndose hacia el interior celular",
            "La célula pierde agua por transporte activo mediado por la bomba Na⁺/K⁺, que bombea agua al exterior",
            "La célula gana solutos por endocitosis, lo que provoca la salida de agua por ósmosis"
        ],
        "correcta": 2
    },
    {
        "id": 22,
        "pregunta": "La bomba de sodio-potasio (Na⁺/K⁺ ATPasa) es fundamental para el mantenimiento del potencial de membrana. Si se inhibe completamente su actividad con ouabaína, ¿cuál de las siguientes consecuencias se observará a corto plazo en una neurona en reposo?",
        "opciones": [
            "Aumento de la concentración intracelular de Na⁺ y disminución de K⁺, con despolarización de la membrana",
            "Aumento de la concentración intracelular de K⁺ y disminución de Na⁺, con hiperpolarización",
            "Mantenimiento de las concentraciones iónicas porque la difusión pasiva compensa la falta de bomba",
            "Interrupción inmediata de la síntesis de ATP porque la bomba consume ATP"
        ],
        "correcta": 3
    },
    {
        "id": 23,
        "pregunta": "Un investigador estudia el transporte de glucosa en el intestino delgado y observa que la absorción de glucosa contra su gradiente de concentración depende de la presencia simultánea de sodio en el lumen intestinal. Este mecanismo es un ejemplo de:",
        "opciones": [
            "Transporte activo primario porque utiliza ATP directamente de la hidrólisis de la bomba Na⁺/K⁺",
            "Transporte activo secundario (simporte) porque utiliza el gradiente de sodio generado por la bomba Na⁺/K⁺ para introducir glucosa contra su gradiente",
            "Difusión facilitada porque la glucosa se une a un transportador que sufre un cambio conformacional",
            "Endocitosis mediada por receptor porque la glucosa es una molécula grande"
        ],
        "correcta": 0
    },
    {
        "id": 24,
        "pregunta": "Durante el estudio de la fluidez de la membrana, un investigador compara dos lípidos: uno con ácidos grasos saturados de 18 carbonos y otro con ácidos grasos insaturados de 18 carbonos (un doble enlace). ¿Cuál de las siguientes afirmaciones sobre la fluidez es correcta?",
        "opciones": [
            "El lípido saturado tiene mayor fluidez porque las colas hidrófobas son más rígidas",
            "El lípido insaturado tiene mayor fluidez porque el doble enlace crea un 'quiebre' que impide el empaquetamiento compacto de las colas",
            "Ambos tienen la misma fluidez porque tienen el mismo número de carbonos",
            "El lípido saturado tiene mayor fluidez porque tiene menos puntos de rotación"
        ],
        "correcta": 2
    },
    {
        "id": 25,
        "pregunta": "Una célula necesita capturar una molécula de colesterol de baja densidad (LDL) del medio extracelular. ¿Cuál de los siguientes mecanismos utiliza y cuál es la secuencia correcta de eventos?",
        "opciones": [
            "Fagocitosis: unión al receptor → formación de pseudópodos → internalización en fagosoma",
            "Endocitosis mediada por receptor: unión de LDL a su receptor → invaginación → formación de vesícula recubierta de clatrina → endosoma temprano → liberación del LDL",
            "Pinocitosis: captura inespecífica de líquido → formación de vesícula → fusión con lisosoma",
            "Difusión facilitada: unión a permeasa → cambio conformacional → liberación al citoplasma"
        ],
        "correcta": 3
    },
    {
        "id": 26,
        "pregunta": "Un investigador añade una toxina que forma poros en la membrana celular, permitiendo el paso de iones Ca²⁺ al interior de la célula. Si el Ca²⁺ intracelular normalmente es de 10⁻⁷ M y el extracelular de 10⁻³ M, ¿qué ocurrirá y qué mecanismo se verá afectado?",
        "opciones": [
            "El Ca²⁺ saldrá de la célula por difusión simple, disminuyendo la concentración intracelular",
            "El Ca²⁺ entrará a la célula a favor de su gradiente electroquímico, activando vías de señalización dependientes de Ca²⁺",
            "El Ca²⁺ se mantendrá constante porque la bomba de Ca²⁺ compensará la entrada",
            "El Ca²⁺ se unirá a la bomba Na⁺/K⁺ y será expulsado por antiporte"
        ],
        "correcta": 0
    },
    {
        "id": 27,
        "pregunta": "Se estudia una proteína de membrana que tiene un dominio transmembrana compuesto por aminoácidos no polares y un dominio citosólico con aminoácidos polares. ¿Cuál de las siguientes afirmaciones sobre esta proteína es correcta?",
        "opciones": [
            "Es una proteína periférica porque tiene regiones polares y no polares",
            "Es una proteína integral porque tiene un dominio transmembrana hidrofóbico que interactúa con la bicapa lipídica",
            "Es una glucoproteína porque tiene aminoácidos polares",
            "Es una proteína de superficie porque los dominios transmembrana no existen"
        ],
        "correcta": 1
    },
    {
        "id": 28,
        "pregunta": "Una célula se encuentra en un medio hipotónico. ¿Cuál de los siguientes procesos ocurrirá y qué estructura celular es responsable de mantener la integridad de la célula frente a este desafío osmótico?",
        "opciones": [
            "La célula se contraerá (crenación) debido a la salida de agua por difusión simple",
            "La célula se hinchará y puede lisarse (hemólisis) si el ingreso de agua por ósmosis excede la capacidad de la membrana para distenderse",
            "La célula mantendrá su volumen constante porque la bomba Na⁺/K⁺ regula el volumen celular",
            "La célula se hinchará porque el colesterol en la membrana permite la entrada de agua"
        ],
        "correcta": 2
    },
    {
        "id": 29,
        "pregunta": "Un fármaco experimental inhibe la clatrina en una célula. ¿Cuál de los siguientes procesos se verá directamente afectado?",
        "opciones": [
            "La difusión simple de oxígeno a través de la bicapa lipídica",
            "La endocitosis mediada por receptor, porque la clatrina es necesaria para la formación de vesículas recubiertas",
            "El transporte activo primario mediado por la bomba Na⁺/K⁺",
            "La difusión facilitada mediada por canales iónicos"
        ],
        "correcta": 1
    },
    {
        "id": 30,
        "pregunta": "Un investigador compara la velocidad de difusión de tres moléculas: oxígeno (O₂), glucosa (C₆H₁₂O₆) y sodio (Na⁺) a través de la membrana plasmática. ¿Cuál de las siguientes afirmaciones sobre su velocidad de difusión es correcta y por qué?",
        "opciones": [
            "O₂ > glucosa > Na⁺ porque la velocidad depende del tamaño: moléculas más pequeñas difunden más rápido",
            "O₂ > Na⁺ > glucosa porque O₂ es no polar y pequeño; Na⁺ usa canales iónicos; glucosa requiere permeasas (difusión facilitada)",
            "Glucosa > O₂ > Na⁺ porque la glucosa tiene transportadores específicos de alta velocidad",
            "Na⁺ > O₂ > glucosa porque los iones tienen carga y son atraídos por el potencial de membrana"
        ],
        "correcta": 0
    },

    // ============================================================
    // MATEMÁTICA - Tema 2: Conjuntos (Preguntas 31-40)
    // ============================================================
    {
        "id": 31,
        "pregunta": "Sea U = {1, 2, 3, ..., 50}. Se definen los conjuntos A = {x ∈ U / x es divisible por 2 y x < 30}, B = {x ∈ U / x es divisible por 3 y x < 40}, C = {x ∈ U / x es divisible por 5 y x < 45}. Calcule |A ∪ B ∪ C|.",
        "opciones": [
            "27",
            "25",
            "29",
            "31"
        ],
        "correcta": 2
    },
    {
        "id": 32,
        "pregunta": "Sea U = {1, 2, 3, ..., 100}. A = {x ∈ U / x es múltiplo de 4}, B = {x ∈ U / x es múltiplo de 6}. Determine (A − B)⁰ (complemento del conjunto A − B).",
        "opciones": [
            "{1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, ...} ∪ (múltiplos de 6 que no son múltiplos de 4)",
            "U − (A − B) = B ∪ (A⁰) = B ∪ (no múltiplos de 4)",
            "U − (A − B) = B⁰ ∪ (A − B)",
            "{1, 2, 3, 4, 5, 6, 7, 8, ...} − {x / x es múltiplo de 12}"
        ],
        "correcta": 3
    },
    {
        "id": 33,
        "pregunta": "En una encuesta a 200 estudiantes sobre sus materias favoritas: 120 prefieren Matemática, 100 prefieren Física, 80 prefieren Química, 50 prefieren Matemática y Física, 40 prefieren Matemática y Química, 30 prefieren Física y Química, 20 prefieren las tres materias. ¿Cuántos estudiantes no prefieren ninguna de las tres materias?",
        "opciones": [
            "40",
            "35",
            "45",
            "50"
        ],
        "correcta": 1
    },
    {
        "id": 34,
        "pregunta": "Sean A, B, C tres conjuntos tales que A ∩ B = ∅, B ∩ C = ∅, A ∩ C = ∅. Si |A| = 10, |B| = 15, |C| = 20, ¿cuántos elementos tiene el conjunto (A ∪ B) × (B ∪ C)?",
        "opciones": [
            "25 × 35 = 875",
            "10 × 15 × 20 = 3000",
            "25 + 35 = 60",
            "10 + 15 + 20 = 45"
        ],
        "correcta": 2
    },
    {
        "id": 35,
        "pregunta": "Sea U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. A = {x ∈ U / x² < 30}, B = {x ∈ U / x > 4}, C = {x ∈ U / x es primo y x < 8}. Calcule (A ∩ C) ∪ (B − A).",
        "opciones": [
            "{2, 3, 5, 7}",
            "{2, 3, 5, 7, 8, 9, 10}",
            "{2, 3, 5, 7, 5, 6, 7, 8, 9, 10}",
            "{2, 3, 5, 7, 6, 7, 8, 9, 10}"
        ],
        "correcta": 0
    },
    {
        "id": 36,
        "pregunta": "En un diagrama de Venn, se tienen tres conjuntos A, B, C. Si n(A) = 25, n(B) = 30, n(C) = 35, n(A∩B) = 10, n(A∩C) = 12, n(B∩C) = 15, n(A∩B∩C) = 5. ¿Cuántos elementos hay en A⁰ ∩ B⁰ ∩ C⁰ si el universo U tiene 100 elementos?",
        "opciones": [
            "42",
            "48",
            "52",
            "58"
        ],
        "correcta": 1
    },
    {
        "id": 37,
        "pregunta": "Sea U = {1, 2, 3, 4, 5, 6, 7, 8}. A = {x ∈ U / x² > 10}, B = {x ∈ U / x es divisor de 12}. Determine (A − B)⁰.",
        "opciones": [
            "{1, 5, 7, 8}",
            "{1, 2, 3, 4, 6}",
            "{2, 3, 4, 6}",
            "{5, 7, 8}"
        ],
        "correcta": 3
    },
    {
        "id": 38,
        "pregunta": "Sean A y B dos conjuntos tales que A ⊂ B. ¿Cuál de las siguientes afirmaciones es siempre verdadera?",
        "opciones": [
            "A⁰ ⊂ B⁰",
            "B⁰ ⊂ A⁰",
            "A⁰ ∩ B = ∅",
            "A ∩ B⁰ = ∅"
        ],
        "correcta": 2
    },
    {
        "id": 39,
        "pregunta": "Se sabe que |A| = 12, |B| = 18, |A ∩ B| = 8. ¿Cuántos elementos tiene A⁰ ∩ B⁰ si el universo U tiene 40 elementos?",
        "opciones": [
            "18",
            "20",
            "22",
            "24"
        ],
        "correcta": 3
    },
    {
        "id": 40,
        "pregunta": "Sea U = {1, 2, 3, ..., 20}. A = {x ∈ U / x es impar}, B = {x ∈ U / x² < 50}. Determine |(A − B)⁰|.",
        "opciones": [
            "16",
            "14",
            "12",
            "10"
        ],
        "correcta": 0
    },

    // ============================================================
    // LENGUAJE - Tema 2: Signos de Puntuación (Preguntas 41-50)
    // ============================================================
    {
        "id": 41,
        "pregunta": "En la siguiente oración, identifique el uso correcto de la coma: 'Los médicos cirujanos los enfermeros y los técnicos trabajaron arduamente durante la emergencia'.",
        "opciones": [
            "Los médicos, cirujanos los enfermeros y los técnicos trabajaron...",
            "Los médicos, cirujanos, los enfermeros y los técnicos trabajaron...",
            "Los médicos, cirujanos, los enfermeros, y los técnicos trabajaron...",
            "Los médicos cirujanos, los enfermeros y los técnicos trabajaron..."
        ],
        "correcta": 3
    },
    {
        "id": 42,
        "pregunta": "¿Cuál de las siguientes oraciones presenta un error en el uso del punto y coma?",
        "opciones": [
            "El paciente llegó tarde; sin embargo, fue atendido de inmediato",
            "La cirugía fue exitosa; el paciente evoluciona favorablemente",
            "El médico recetó antibióticos; analgésicos; y antiinflamatorios",
            "Los resultados del laboratorio son: hemoglobina 12 g/dL; leucocitos 8000/µL; plaquetas 250000/µL"
        ],
        "correcta": 1
    },
    {
        "id": 43,
        "pregunta": "En la oración: 'El paciente, que presentaba fiebre alta, fue aislado inmediatamente', el uso de la coma corresponde a:",
        "opciones": [
            "Coma vocativa",
            "Coma de aposición explicativa",
            "Coma enumerativa",
            "Coma adversativa"
        ],
        "correcta": 2
    },
    {
        "id": 44,
        "pregunta": "¿Cuál de los siguientes usos del paréntesis es incorrecto?",
        "opciones": [
            "La OMS (Organización Mundial de la Salud) recomienda la vacunación",
            "El paciente (42 años) ingresó con diagnóstico de neumonía",
            "El tratamiento (antibióticos, antiinflamatorios) fue efectivo",
            "La investigación (publicada en 2023) es un referente en el área"
        ],
        "correcta": 0
    },
    {
        "id": 45,
        "pregunta": "En el diálogo: '—¿Cómo se siente? —preguntó el médico— ¿Tiene dolor?' el uso de la raya es correcto porque:",
        "opciones": [
            "Indica el cambio de interlocutor en un diálogo",
            "Encierra una aclaración del narrador dentro del diálogo",
            "Separa oraciones subordinadas de la principal",
            "Marca una pausa mayor que la coma"
        ],
        "correcta": 3
    },
    {
        "id": 46,
        "pregunta": "¿Cuál de las siguientes oraciones utiliza incorrectamente los dos puntos?",
        "opciones": [
            "El médico indicó: reposo absoluto y medicación",
            "Los síntomas son: fiebre, tos y dolor de cabeza",
            "La paciente dijo: 'No puedo respirar bien'",
            "Los exámenes de laboratorio muestran: leucocitosis y elevación de PCR"
        ],
        "correcta": 1
    },
    {
        "id": 47,
        "pregunta": "En la oración: 'El paciente ingresó... fue evaluado... y recibió tratamiento inmediato', los puntos suspensivos indican:",
        "opciones": [
            "Duda o temor del narrador",
            "Omisión de palabras que se sobrentienden",
            "Una pausa prolongada",
            "Una enumeración incompleta"
        ],
        "correcta": 2
    },
    {
        "id": 48,
        "pregunta": "El uso del asterisco (*) como signo auxiliar es correcto en:",
        "opciones": [
            "El examen será el 15* de mayo",
            "La paciente refiere *dolor* en el pecho",
            "*Para más información, consulte al médico*",
            "El tratamiento fue efectivo* (ver nota al pie)"
        ],
        "correcta": 0
    },
    {
        "id": 49,
        "pregunta": "¿Cuál de las siguientes oraciones presenta un error en el uso de las comillas?",
        "opciones": [
            "El médico dijo: 'El reposo es fundamental'",
            "La palabra 'fiebre' proviene del latín febris",
            "El artículo 'Nuevos avances en oncología' fue publicado en 2023",
            "La 'Coca Cola' no es recomendable en este tratamiento"
        ],
        "correcta": 1
    },
    {
        "id": 50,
        "pregunta": "En la oración: 'El tratamiento, que incluía antibióticos, fue suspendido; sin embargo, el paciente mejoró.' la puntuación es correcta porque:",
        "opciones": [
            "La coma separa el vocativo y el punto y coma une oraciones relacionadas",
            "La coma encierra una aposición explicativa y el punto y coma separa oraciones con adversativas",
            "La coma separa elementos de una enumeración y el punto y coma indica una pausa mayor",
            "La coma indica una pausa breve y el punto y coma separa oraciones largas"
        ],
        "correcta": 3
    },

    // ============================================================
    // FÍSICA - Tema 2: Vectores y Estática (Preguntas 51-60)
    // ============================================================
    {
        "id": 51,
        "pregunta": "Dados los vectores A = 5i + 3j - 2k y B = -2i + 4j + 6k, calcule el producto cruz A × B.",
        "opciones": [
            "26i - 26j + 26k",
            "26i + 34j - 14k",
            "-26i + 34j + 14k",
            "26i + 34j + 14k"
        ],
        "correcta": 1
    },
    {
        "id": 52,
        "pregunta": "Un cuerpo de 50 N de peso cuelga del techo mediante dos cuerdas que forman ángulos de 30° y 60° con la horizontal. Determine las tensiones T₁ (ángulo 30°) y T₂ (ángulo 60°).",
        "opciones": [
            "T₁ = 25 N, T₂ = 25√3 N",
            "T₁ = 50√3 N, T₂ = 50 N",
            "T₁ = 50 N, T₂ = 50√3 N",
            "T₁ = 25√3 N, T₂ = 25 N"
        ],
        "correcta": 2
    },
    {
        "id": 53,
        "pregunta": "Determine el vector resultante de la suma de tres vectores: A = 3i - 4j, B = -2i + 5j, C = i - 2j. Calcule también el ángulo que forma con el eje x positivo.",
        "opciones": [
            "R = 2i - j, θ = -26.6°",
            "R = 2i - j, θ = 26.6°",
            "R = 2i + j, θ = 26.6°",
            "R = -2i + j, θ = 153.4°"
        ],
        "correcta": 3
    },
    {
        "id": 54,
        "pregunta": "Calcule el ángulo entre los vectores A = 2i + 3j y B = -4i + j.",
        "opciones": [
            "135°",
            "120°",
            "150°",
            "143.1°"
        ],
        "correcta": 0
    },
    {
        "id": 55,
        "pregunta": "Un vector V tiene componentes V_x = 4 y V_y = 7. ¿Cuál es su vector unitario?",
        "opciones": [
            "(4/√65)i + (7/√65)j",
            "(4/√65)i - (7/√65)j",
            "(-4/√65)i + (7/√65)j",
            "(4/√65)i + (7/√65)j"
        ],
        "correcta": 2
    },
    {
        "id": 56,
        "pregunta": "Una barra homogénea de 6 m y peso 400 N está apoyada en sus extremos. En el punto medio cuelga un peso de 600 N. Calcule las reacciones en los apoyos.",
        "opciones": [
            "400 N y 600 N",
            "300 N y 700 N",
            "500 N y 500 N",
            "350 N y 650 N"
        ],
        "correcta": 1
    },
    {
        "id": 57,
        "pregunta": "Determine la magnitud y dirección de la resultante de las fuerzas: 60 N al este, 80 N al norte, 100 N al oeste y 40 N al sur.",
        "opciones": [
            "R = 40 N, dirección 45° (noroeste)",
            "R = 40√2 N, dirección 45° (noroeste)",
            "R = 40 N, dirección 0° (este)",
            "R = 40√2 N, dirección 45° (noreste)"
        ],
        "correcta": 3
    },
    {
        "id": 58,
        "pregunta": "Una escalera de 5 m de longitud y peso 300 N está apoyada contra una pared lisa formando 60° con el suelo. Calcule las reacciones en el suelo y en la pared.",
        "opciones": [
            "N_suelo = 300 N, N_pared = 150√3 N",
            "N_suelo = 300 N, N_pared = 150 N",
            "N_suelo = 150 N, N_pared = 300√3 N",
            "N_suelo = 300√3 N, N_pared = 150 N"
        ],
        "correcta": 1
    },
    {
        "id": 59,
        "pregunta": "Calcule el módulo del vector resultante de dos vectores de 8 y 15 unidades que forman un ángulo de 120°.",
        "opciones": [
            "12.2",
            "13.0",
            "14.5",
            "11.5"
        ],
        "correcta": 2
    },
    {
        "id": 60,
        "pregunta": "En un plano inclinado de 30°, un bloque de 200 N está en equilibrio. Si el coeficiente de fricción estática es 0.4, determine la fuerza de fricción necesaria para mantener el equilibrio.",
        "opciones": [
            "100 N",
            "173.2 N",
            "69.3 N",
            "150 N"
        ],
        "correcta": 3
    }
];