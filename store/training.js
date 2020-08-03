export const state = () => ({
    card: [
        {
            title: 'OpenCv',
            readMoreActivated: false,
            body: 'OpenCV is a cross-platform library using which we can develop real-time computer vision applications. It mainly focuses on image processing, video capture and analysis including features like face detection and object detection.',
            description: 'OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in the commercial products. Being a BSD-licensed product, OpenCV makes it easy for businesses to utilize and modify the code.',
            image: 'opencv.png',
            duration: 8.2,
          level: 'Beginner',
          lessons: 37,
          register: 'https://www.python.org/',
          teacher: [
            { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
            { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
            { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
            { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          ],
          items: [
            {
              title: 'Introduciton & Environment Setup',
              items: [
                { title: 'Introduction' },
                { title: 'Setup' },
              ],
            },
            {
              title: 'Python and its important libraries',
              active: true,
              items: [
                { title: 'Numpy' },
                { title: 'Pandas' },
                { title: 'Matplotlib' },
                { title: 'Scikit-Learn' },
                { title: 'few other libraries' },
              ],
            },
            {
              title: 'GUI Features in OpenCV',
              items: [
                { title: 'Image Basics' },
                { title: 'Pixel Coordinate System' },
                { title: 'Getting started with Images' },
                { title: 'Getting started with Videos' },
                { title: 'Drawing Functions in OpenCV' },
                { title: 'Mouse as a Paint Brush' },
              ],
            },
            {
              title: 'Operations on Images',
              items: [
                { title: 'Basic Operations' },
                { title: 'Arithmetic Opearations' },
                { title: 'Bitwise Operations' },
              ],
            },
            {
              title: 'Image Processing in OpenCV',
              items: [
                { title: 'Image Transformations' },
                { title: 'Translation' },
                { title: 'Rotation' },
                { title: 'Resizing' },
                { title: 'Flipping' },
                { title: 'Cropping' },
                { title: 'Color Spaces BGR, RGB, HSV' },
              ],
            },
            {
              title: 'Histograms',
              items: [
                { title: 'Introduction' },
              ],
            },
            {
              title: 'Feature Detection',
              items: [
                { title: 'Image Thresholding' },
                { title: 'Smoothening' },
                { title: 'Blurring' },
                { title: 'Edge Detection' },
                { title: 'Harris Corner detection' },
                { title: 'BRIEF' },
                { title: 'ORB' }
              ],
            },
            {
              title: 'Video Analysis',
              items: [
                { title: 'Introduction' },
              ],
            },
            {
              title: 'Object Detection',
              items: [
                { title: 'Haarcascades' },
                { title: 'Smile Detection' },
                { title: 'Face Detection' },
                { title: 'Eye Detection' },
                { title: 'Vehicle Detection' },
              ],
            },
          ],
        },
        {
          title: 'Machine Learning',
          readMoreActivated: false,
          body: 'Machine learning is taking over the world - it is benefiting companies across industries. It is helping organisations create systems that can understand, learn, predict, adapt and operate on their own. Thus, understanding how machine learning works is one of the most valuable and useful things you can do.',
          description: 'This Machine Learning online course offers an in-depth overview of Machine Learning topics including working with real-time data, developing algorithms using supervised & unsupervised learning, regression, classification, and time series modeling. Learn how to use Python in this Machine Learning certification training to draw predictions from data.',
          image: 'ml.jpeg',
          duration: 4,
        level: 'Beginner',
        lessons: 14,
        register: 'https://www.python.org/',
        teacher: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        items: [
          {
            title: 'Introduction and Environment setup',
            items: [
              { title: 'Introduction' },
              { title: 'Setup' },
            ],
          },
          {
            title: 'Supervised learning',
            active: true,
            items: [
              { title: 'Numpy' },
              { title: 'Pandas' },
              { title: 'Matplotlib' },
              { title: 'Scikit-Learn' },
              { title: 'few other libraries' },
            ],
          },
          {
            title: 'Unsupervised learning',
            items: [
              { title: 'Image Basics' },
              { title: 'Pixel Coordinate System' },
              { title: 'Getting started with Images' },
              { title: 'Getting started with Videos' },
              { title: 'Drawing Functions in OpenCV' },
              { title: 'Mouse as a Paint Brush' },
            ],
          },
          {
            title: 'Linear Regression',
            items: [
              { title: 'Basic Operations' },
              { title: 'Arithmetic Opearations' },
              { title: 'Bitwise Operations' },
            ],
          },
          {
            title: 'Logistic Regression',
            items: [
              { title: 'Image Transformations' },
              { title: 'Translation' },
              { title: 'Rotation' },
              { title: 'Resizing' },
              { title: 'Flipping' },
              { title: 'Cropping' },
              { title: 'Color Spaces BGR, RGB, HSV' },
            ],
          },
          {
            title: 'K nearest neighbours',
            items: [
              { title: 'Introduction' },
            ],
          },
          {
            title: 'Decision Trees and Random Forest ',
            items: [
              { title: 'Image Thresholding' },
              { title: 'Smoothening' },
              { title: 'Blurring' },
              { title: 'Edge Detection' },
              { title: 'Harris Corner detection' },
              { title: 'BRIEF' },
              { title: 'ORB' }
            ],
          },
          {
            title: 'SVM',
            items: [
              { title: 'Introduction' },
            ],
          },
          {
            title: 'K means Clustering',
            items: [
              { title: 'Haarcascades' },
              { title: 'Smile Detection' },
              { title: 'Face Detection' },
              { title: 'Eye Detection' },
              { title: 'Vehicle Detection' },
            ],
          },
          {
            title: 'Neural networks',
            items: [
              { title: 'Introduction' },
              { title: 'Setup' },
            ],
          },
          {
            title: 'Project',
            active: true,
            items: [
              { title: 'Numpy' },
              { title: 'Pandas' },
              { title: 'Matplotlib' },
              { title: 'Scikit-Learn' },
              { title: 'few other libraries' },
            ],
          },
          {
            title: 'Intro to NLP',
            items: [
              { title: 'Image Basics' },
              { title: 'Pixel Coordinate System' },
              { title: 'Getting started with Images' },
              { title: 'Getting started with Videos' },
              { title: 'Drawing Functions in OpenCV' },
              { title: 'Mouse as a Paint Brush' },
            ],
          },
          {
            title: 'Text Classification',
            items: [
              { title: 'Basic Operations' },
              { title: 'Arithmetic Opearations' },
              { title: 'Bitwise Operations' },
            ],
          },
        ],
      },
      {
        title: 'Python Course',
        readMoreActivated: false,
        body: 'In this live, instructor-led training course, students who already have a programming background will learn to program in Python. ',
        description: 'In this live, instructor-led training course, students who already have a programming background will learn to program in Python. Attendees will learn: how Python works and its place in the world of programming languages; to work with and manipulate strings; to perform math operations; to work with Python sequences; to collect user input and output results; flow control processing; to write to, and read from, files; to write functions; to handle exception; and work with dates and times. This Python course is taught using Python 3. Differences between Python 2 and Python 3 are noted.',
        image: 'python.jpg',
        duration: 4,
      level: 'Beginner',
      lessons: 7,
      register: 'https://www.python.org/',
      teacher: [
        { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items: [
        {
          title: 'Vital Python – Math, Strings, Conditionals, and Loops',
          items: [
            { title: 'Vital Python' },
            { title: 'Numbers: Operations, Types, and Variables' },
            { title: 'To Open a Jupyter Notebook' },
            { title: 'Python as a Calculator' },
            { title: 'Basic Math Operations' },
            { title: 'Standard Math Operations' },
            { title: 'Order of Operations' },
            { title: 'Spacing in Python' },
            { title: 'Number Types: Integers and Floats' },
            { title: 'Complex Number Types' },
            { title: 'Errors in Python' },
          ],
        },
        {
          title: 'Variables',
          active: true,
          items: [
            { title: 'Variable Assignment' },
            { title: 'Changing Types' },
            { title: 'Reassigning Variables in Terms of Themselves' },
            { title: 'Variable Names' },
            { title: 'Multiple Variables' },
            { title: 'Comments' },
            { title: 'Docstrings' },
            { title: 'Theorem in Python' },
          ],
        },
        {
          title: 'Strings: Concatenation, Methods, and input()',
          items: [
            { title: 'String Syntax' },
            { title: 'Escape Sequences with Quotes' },
            { title: 'Multi-Line Strings' },
            { title: 'The print() Function' },
            { title: 'String Operations and Concatenation' },
            { title: 'String Interpolation' },
            { title: 'Comma Separators' },
            { title: 'Format' },
            { title: 'The len() Function' },
            { title: 'String Methods' },
            { title: 'Casting' },
            { title: 'The input() Function' },
            { title: 'String Indexing and Slicing' },
            { title: 'Indexing' },
            { title: 'Slicing' },
          ],
        },
        {
          title: 'Strings and Their Methods',
          items: [
            { title: 'Booleans and Conditionals'},
            { title: 'Booleans'},
            { title: 'Logical Operators'},
            { title: 'Comparison Operators'},
            { title: 'Comparing Strings'},
            { title: 'Conditionals'},
            { title: 'The if Syntax'},
            { title: 'Indentation'},
            { title: 'if else'},
            { title: 'The elif Statement'},
            { title: 'Loops'},
            { title: 'The while Loops'},
            { title: 'An Infinite Loop'},
            { title: 'break'},
            { title: 'Programs'},
            { title: 'The for Loop'},
            { title: 'The continue Keyword'},

          ],
        },
        {
          title: 'Python Structures',
          items: [
            { title: 'The Power of Lists' },
            { title: 'List Methods' },
            { title: 'Accessing an Item from a List' },
            { title: 'Adding an Item to a List' },
            { title: 'Dictionary Keys and Values' },
            { title: 'a List and a Dictionary' },
            { title: 'Zipping and Unzipping Dictionaries Using zip()' },
            { title: 'Dictionary Methods' },
            { title: 'Tuples' },
            { title: 'A Survey of Sets' },
            { title: 'Set Operations' },
            { title: 'Choosing Types' },

          ],
        },
        {
          title: 'Executing Python – Programs',
          items: [
            { title: "Algorithms, and Functions" },
            { title: "Introduction" },
            { title: "Python Scripts and Modules" },
            { title: "Shebangs in Ubuntu" },
            { title: "Docstrings" },
            { title: "Imports" },
            { title: "The if __name__ == '__main__' Statement" },
            { title: "Basic Functions" },
            { title: "Positional Arguments" },
            { title: "Keyword Arguments" },
            { title: "Iterative Functions" },
            { title: "Exiting Early" },
            { title: "Activity 10: The Fibonacci Function with an Iteration" },
            { title: "Helper Functions" },
            { title: "Don't Repeat Yourself" },
            { title: "Variable Scope" },
            { title: "Variables" },
            { title: "Defining inside versus outside a Function" },
            { title: "The Global Keyword" },
            { title: "The Nonlocal Keyword" },
            { title: "Lambda Functions" },
            { title: "Mapping with Lambda Functions" },
            { title: "Filtering with Lambda Functions" },
            { title: "Sorting with Lambda Functions" },

          ],
        },
        {
          title: 'Extending Python, Files, Errors, and Graphs ',
          items: [
            { title: 'Reading Files' },
            { title: 'Writing Files' },
            { title: 'the Date and Time in a Text File' },

          ],
        },
      ],
    },
    ],
  })
