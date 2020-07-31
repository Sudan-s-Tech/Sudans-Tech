export const state = () => ({
    card: [
        {
            title: 'OpenCv',
            readMoreActivated: false,
            body: 'OpenCV is a cross-platform library using which we can develop real-time computer vision applications. It mainly focuses on image processing, video capture and analysis including features like face detection and object detection.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
              'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
              'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
              'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
              'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
              'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    ],
    content: [
        'Industrial Training',
        '',
        ''
    ]
  })
