var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Phạm Công Vinh  github.com\/VinhPhmCng   vinhpcdev@gmail.com        copyright 2024 Phạm Công Vinh  Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled GNU Free Documentation License .   "
},
{
  "id": "sec-introduction",
  "level": "1",
  "url": "sec-introduction.html",
  "type": "Phần",
  "number": "1",
  "title": "Lời Mở Đầu",
  "body": " Lời Mở Đầu   Welcome my friend! This is an article on programming and its most fundamental concepts , as you can see in the Table of Contents to your left. The knowledge is designed to be as beginner-friendly as possible, making each section a 5 to 10-minute read.   Liên kết series Youtube This article is also adapted into videos, which are available on Youtube and also embedded into the corresponding section. This way, whether you are a visual or auditory learner, or both, you can find the most comfortable way to enjoy this tutorial. (P.S. The videos are short and quite silly because I'm new to editing.)  That's it! Going forward I hope I can give you a good first impression of the wonderful world of programming. Despite the title, I hope this article will be useful and entertaining to both complete novices and those who've had minimal contact with programming.    Hướng Dẫn Sử Dụng  Khái quát   Khái quát nội dung An overview of the contents:   Sections 1 and 2 : An introduction to the article.   Sections 3 to 10 : Fundamental concepts of programming.   Sections 11 and 12 : My personal experiences.    Sections 13 to 19 (under development, tentative) : Slightly more advanced fundamental concepts.     New concepts will be introduced with the following structure:  Definition  Ví dụ code  Explanations for examples  When running code examples , you should simultaneously read the corresponding explanations for the best learning experience.  You can also watch the videos, before or after reading each section. They have cool visuals and present ideas in a different way.  Bạn có thể tìm thấy các ngôn ngữ khả dụng trong .    Ủng Hộ Dự Án  Ủng hộ   Liên kết mã nguồn This is an open-source project, meaning its source code is available on Github here .   Ủng hộ trực tiếp  Liên kết đóng góp Readers can make a free Github account and give feedback and suggestions directly. If you're a programmer and would like to support your community by translating this article into your language, then that's possible as well. Refer to Contributing for more details.   Ủng hộ công cụ This page is built with PreTeXt , which features built-in interactive code cells, enhancing your experience. Please support them as well!   Ủng hộ các video  Liên kết công cụ Enjoying the Youtube series is not only an effective way to learn, but also a great way of supporting the project. More details on the tools and resources used to create the videos can be found here .   Ủng hộ  Liên kết ủng hộ And if you really appreciate the contents, consider leaving a donation here . Thanks a bunch!  Now then, let's get started, shall we?    Lập Trình Là Gì?  Khái niệm lập trình       Basic Programming Part 1: Introduction  Video phần 01     "
},
{
  "id": "sec-introduction-2-1",
  "level": "2",
  "url": "sec-introduction.html#sec-introduction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "programming fundamental concepts "
},
{
  "id": "subsec-how-to-follow-along-3",
  "level": "2",
  "url": "sec-introduction.html#subsec-how-to-follow-along-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sections 1 and 2 Sections 3 to 10 Sections 11 and 12 Sections 13 to 19 (under development, tentative) "
},
{
  "id": "subsec-how-to-follow-along-4",
  "level": "2",
  "url": "sec-introduction.html#subsec-how-to-follow-along-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simultaneously "
},
{
  "id": "subsec-what-is-programming-4",
  "level": "2",
  "url": "sec-introduction.html#subsec-what-is-programming-4",
  "type": "Video",
  "number": "1.1",
  "title": "Basic Programming — Part 1: Introduction.",
  "body": " Basic Programming Part 1: Introduction  Video phần 01   "
},
{
  "id": "sec-pro-environment",
  "level": "1",
  "url": "sec-pro-environment.html",
  "type": "Phần",
  "number": "2",
  "title": "Môi Trường Lập Trình",
  "body": " Môi Trường Lập Trình  Môi trường lập trình    Tìm hiểu cách sử dụng những thành phần cơ bản của môi trường lập trình.    Để viết code, bạn cần một môi trường làm việc phù hợp. Chắc chắn là bạn sẽ không mở trình soạn thảo Word để lập trình rồi, phải không nào? Thay vào đó, ta sẽ sử dụng một trình soạn thảo và biên dịch code .   Môi trường lập trình phiên bản 1 Trong bản online của quyển sách này, trình soạn thảo và biên dịch của chúng ta nhìn như sau:   Thí Nghiệm Vui    Chạy đoạn code.  Thay đổi code tùy ý và chạy lại.       8    Ví dụ code phiên bản 1  Hàm print()   Lệnh print() có nhiệm vụ rất đơn giản là đưa dữ liệu ở bên trong hai dấu ngoặc đơn ra terminal. Ở đây, dữ liệu đó là kết quả của phép toán a + b .    Khái quát môi trường lập trình Môi trường trên có những thành phần sau:    Ô soạn thảo Nơi viết code. Trên bản Online, bạn có thể chỉnh sửa và thí nghiệm với code.     Nút Chạy Code (Online) Ấn để chạy chương trình.     Terminal (Online) Nơi hiển thị kết quả hoặc lỗi, nếu có, khi chạy đoạn code.     Output Nơi hiển thị kết quả tĩnh . Được thiết kế cho bản cứng hoặc PDF, nhưng cũng có thể giúp người dùng bản Online, trong trường hợp trình biên dịch có vấn đề.     Giải Thích Nơi đưa ra lời giải thích cho ví dụ code.      Môi trường lập trình phiên bản 2 Một phiên bản khác của ô code nhìn như sau:   a = 3 b = 5 print(a + b)    8    Ví dụ code phiên bản 2  Giống như trên.   Môi trường này chạy tương tự, nhưng nó bổ sung thêm hai chức năng. Thanh kéo cho phép bạn làm việc với các phiên bản khác nhau của code qua những lần chỉnh sửa. Và nút CodeLens kích hoạt một phần mềm cho phép bạn chạy code từng bước một, giúp bạn theo dõi các dữ liệu thay đổi.   Lưu ý chọn môi trường lập trình  Tùy vào khái niệm đang nói đến, môi trường phù hợp hơn để trình bày nó sẽ được sử dụng.    Có thể bạn sẽ hứng thú:      Liên kết khảo sát IDEs phổ biến năm 2023  stackoverflow's 2023 survey on the most popular IDEs        Chú ý thay đổi code  Nếu bạn cập nhật code trong ô soạn thảo và chạy lại code, chỉ có kết quả trong terminal mới được cập nhật. Còn output tĩnh sẽ luôn giữ kết quả của đoạn code nguyên bản.   Trong quyển sách này, để đảm bảo sự đơn giản , môi trường lập trình của chúng ta được hạn chế xuống những thành phần đó. Những môi trường lập trình phức tạp hơn sẽ có rất nhiều chức năng giúp các lập trình viên sáng tạo, nhưng đối với người mới bắt đầu, chúng là không cần thiết. Ngoài ra, cài đặt những công cụ nâng cao thường rất phức tạp, vì thế dễ làm bạn nản lòng.  Những đoạn code ví dụ được cung cấp có thể được chạy trực tiếp hoặc cắt, dán, và chạy ở các ô code trong . Chúng cũng có thể được biên dịch và chạy ở những mỗi trường bên ngoài, nhưng quyển sách này sẽ không hướng dẫn việc đó.   Chú ý ô code nối tiếp  Những ô code trong quyển sách này có thể nối tiếp những ô code ngay trước nó. Việc này giúp một vài ví dụ trở nên ngắn gọn và việc giải thích thuận lợi hơn.    Quy ước ô code nối tiếp  Nếu một ô code là phần nối tiếp thì nó có dòng đầu tiên như sau:     -2    Ví dụ code ô code nối tiếp   Tại sao a - b lại có kết quả bằng -2 ? Nếu bạn nhìn lên ô code đầu tiên, bạn sẽ thấy a = 3 và b = 5 . Vậy ô code này đang nối tiếp ô code phía trên.    Chú ý đầu ra không mong muốn  Vậy, khi bạn chạy một ô code bắt đầu với # ... mà xuất hiện lỗi hoặc kết quả ngoài ý muốn, thì khả năng cao là do bạn chưa chạy những ô code trước nó.        Basic Programming Part 2: Our Programming Environment  Video phần 02    "
},
{
  "id": "sec-pro-environment-3",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-3",
  "type": "Mục Tiêu",
  "number": "2",
  "title": "",
  "body": "  Tìm hiểu cách sử dụng những thành phần cơ bản của môi trường lập trình.   "
},
{
  "id": "sec-pro-environment-4",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trình soạn thảo và biên dịch code "
},
{
  "id": "sec-pro-environment-8",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-8",
  "type": "Output",
  "number": "2.1",
  "title": "",
  "body": " 8  "
},
{
  "id": "sec-pro-environment-9",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-9",
  "type": "Giải Thích",
  "number": "2.1",
  "title": "",
  "body": " Ví dụ code phiên bản 1  Hàm print()   Lệnh print() có nhiệm vụ rất đơn giản là đưa dữ liệu ở bên trong hai dấu ngoặc đơn ra terminal. Ở đây, dữ liệu đó là kết quả của phép toán a + b .  "
},
{
  "id": "sec-pro-environment-10",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ô soạn thảo Nút Chạy Code Terminal Output tĩnh Giải Thích "
},
{
  "id": "sec-pro-environment-13",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-13",
  "type": "Output",
  "number": "2.2",
  "title": "",
  "body": " 8  "
},
{
  "id": "sec-pro-environment-14",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-14",
  "type": "Giải Thích",
  "number": "2.2",
  "title": "",
  "body": " Ví dụ code phiên bản 2  Giống như trên.  "
},
{
  "id": "sec-pro-environment-16",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-16",
  "type": "Lưu Ý",
  "number": "2.3",
  "title": "",
  "body": " Lưu ý chọn môi trường lập trình  Tùy vào khái niệm đang nói đến, môi trường phù hợp hơn để trình bày nó sẽ được sử dụng.  "
},
{
  "id": "sec-pro-environment-18",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-18",
  "type": "Chú Ý",
  "number": "2.4",
  "title": "",
  "body": " Chú ý thay đổi code  Nếu bạn cập nhật code trong ô soạn thảo và chạy lại code, chỉ có kết quả trong terminal mới được cập nhật. Còn output tĩnh sẽ luôn giữ kết quả của đoạn code nguyên bản.  "
},
{
  "id": "sec-pro-environment-19",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sự đơn giản "
},
{
  "id": "sec-pro-environment-21",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-21",
  "type": "Chú Ý",
  "number": "2.5",
  "title": "",
  "body": " Chú ý ô code nối tiếp  Những ô code trong quyển sách này có thể nối tiếp những ô code ngay trước nó. Việc này giúp một vài ví dụ trở nên ngắn gọn và việc giải thích thuận lợi hơn.  "
},
{
  "id": "sec-pro-environment-22",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-22",
  "type": "Quy Ước",
  "number": "2.6",
  "title": "",
  "body": " Quy ước ô code nối tiếp  Nếu một ô code là phần nối tiếp thì nó có dòng đầu tiên như sau:  "
},
{
  "id": "sec-pro-environment-24",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-24",
  "type": "Output",
  "number": "2.7",
  "title": "",
  "body": " -2  "
},
{
  "id": "sec-pro-environment-25",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-25",
  "type": "Giải Thích",
  "number": "2.3",
  "title": "",
  "body": " Ví dụ code ô code nối tiếp   Tại sao a - b lại có kết quả bằng -2 ? Nếu bạn nhìn lên ô code đầu tiên, bạn sẽ thấy a = 3 và b = 5 . Vậy ô code này đang nối tiếp ô code phía trên.  "
},
{
  "id": "sec-pro-environment-26",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-26",
  "type": "Chú Ý",
  "number": "2.8",
  "title": "",
  "body": " Chú ý đầu ra không mong muốn  Vậy, khi bạn chạy một ô code bắt đầu với # ... mà xuất hiện lỗi hoặc kết quả ngoài ý muốn, thì khả năng cao là do bạn chưa chạy những ô code trước nó.  "
},
{
  "id": "sec-pro-environment-28",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-28",
  "type": "Video",
  "number": "2.4",
  "title": "Basic Programming — Part 2: Our Programming Environment.",
  "body": " Basic Programming Part 2: Our Programming Environment  Video phần 02   "
},
{
  "id": "sec-pro-language",
  "level": "1",
  "url": "sec-pro-language.html",
  "type": "Phần",
  "number": "3",
  "title": "Ngôn Ngữ Lập Trình",
  "body": " Ngôn Ngữ Lập Trình    Quan sát một vài ví dụ về các ngôn ngữ lập trình.  Tìm hiểu ngôn ngữ lập trình bậc cao và bậc thấp .     Khái niệm ngôn ngữ lập trình    Ngôn ngữ lập trình là một hệ thống các ký hiệu giúp con người tạo ra các chương trình máy tính, cũng chính là đưa ra chỉ dẫn cho máy tính.  Mỗi ngôn ngữ lập trình có bộ cú pháp của riêng nó.   Cú pháp đơn giản là ngữ pháp của một ngôn ngữ lập trình. Nó đóng vai trò thiết yếu trong quá trình máy tính dịch và chạy code.    Dưới đây là một đoạn code được viết bằng Python một trong những ngôn ngữ lập trình phổ biến nhất trong những năm gần đây. Hãy chạy dòng code sau và xem kết quả nhé.    Hello World!    Ví dụ code bậc cao  Hàm print()   Lệnh print() có nhiệm vụ rất đơn giản là đưa dữ liệu ra terminal. Ở đây, dữ liệu đó là dòng chữ Hello World! .    Ví dụ code bậc cao Đây là một đoạn code nữa được viết bằng Python (Bạn chưa cần phải hiểu đoạn code này, nhưng bạn có thể đoán xem nó đang làm gì không?)   Thí Nghiệm Vui  Sao chép và dán đoạn code bên vào một ô code và chạy nó.    a = 0 while a < 10: print(a, end=\" \") if a % 2 == 0: print(\"is even\") else: print(\"is odd\") a += 1   Dễ thấy, có những từ khóa như while , print  end , if , và else . Ngoài chúng ra, cú pháp của Python có rất nhiều từ khóa và đặc điểm gần gũi với ngôn ngữ tiếng Anh.   Khái niệm ngôn ngữ bậc cao   Python được coi là một ngôn ngữ lập trình bậc cao vì cú pháp của nó gần gũi với tiếng Anh.    Vì vậy, Python thường được đề xuất tới người mới học lập trình, và cũng chính là một trong những lí do nó là một trong những ngôn ngữ lập trình phổ biến nhất.   Ví dụ code bậc thấp Tiếp theo, ta có một đoạn code được viết bằng Assembly . Khi chạy, ta cũng thu được dòng chữ Hello World! . (Một lần nữa, đừng cố hiểu đoạn code này. Cái này tôi cũng chịu.)   Thí Nghiệm Vui  Đây là một trình biên dịch Assembly nếu bạn muốn thử chạy nó.    section .data hello: db 'Hello World!',10 helloLen: equ $-hello section .text global _start _start: mov eax,4 mov ebx,1 mov ecx,hello mov edx,helloLen int 80h mov eax,1 mov ebx,0 int 80h;   Như bạn có thể thấy, đây gần như là ngôn ngữ máy tính. Assembly cần đến 14 dòng code để làm điều mà Python có thể thực hiện với một dòng.   Khái niệm ngôn ngữ bậc thấp   Assembly được coi là một ngôn ngữ lập trình bậc thấp vì cú pháp của nó gần với ngôn ngữ máy tính.    Vậy, ngôn ngữ bậc cao có cú pháp ngắn gọn và thân thiện hơn ngôn ngữ bậc thấp. Có thể bạn sẽ hỏi Vậy khi nào thì ta dùng ngôn ngữ bậc thấp?   Có nhiều lý do, và trong đó tốc độ là đương nhiên nhất. Về cơ bản, code được viết với ngôn ngữ bậc cao phải đi qua nhiều bước trung gian hơn trước khi được dịch thành ngôn ngữ máy tính (nhị phân). Vì vậy, ngôn ngữ bậc thấp có lợi thế về tốc độ.  Một vài lý do khác là chuyên môn, thao tác dữ liệu chính xác, hệ thống kế thừa, v.v.   Lưu ý bậc cao vs bậc thấp  Để hình dung, bạn hãy tưởng tượng ngôn ngữ lập trình bậc cao là chiếc xe ô tô gia đình rất thân thiện với người dùng, ai cũng có thể học và lái được. Khi đó, bậc thấp sẽ là chiếc xe đua F1 mà chỉ những tay đua kỳ cựu nhất mới có thể điều khiển được.  Và hiển nhiên rồi, đổi lại chiếc xe đua F1 bậc thấp sẽ có tốc độ vượt xa chiếc xe ô tô bậc cao .   Nhưng, đối với người mới học, lợi thế tốc độ này không thực sự quan trọng lắm. Vì vậy, các ngôn ngữ bậc cao là nơi để bạn bắt đầu.   Chú ý ví dụ code  Trong bài viết này, các ví dụ code được viết bằng Python, giúp bạn theo dõi và thí nghiệm dễ dàng hơn.  Nhưng bạn cũng có thể thử các ngôn ngữ khác trong .    Có thể bạn sẽ hứng thú:      Liên kết khảo sát ngôn ngữ phổ biến năm 2023  stackoverflow's 2023 survey on the most popular languages       Thiết kế của một ngôn ngữ phụ thuộc vào mục đích của nó. Ví dụ như Guido van Rossum, ông đã ưu tiên sự dễ hiểu và dễ sử dụng khi ông tạo ra Python. Vì vậy, cú pháp của nó giúp lập trình viên viết code một cách sáng suốt.   Chọn Một Ngôn Ngữ Lập Trình  Lưu ý chọn một ngôn ngữ  Khi một người mới bắt đầu học lập trình, họ thường xuyên gặp phải những câu hỏi hay chủ đề như:   Nên bắt đầu với ngôn ngữ lập trình nào?    Ngôn ngữ lập trình nào nên học trong năm 2024?    Ngôn ngữ lập trình nào nên học để có việc lương cao?   v.v.  Theo tôi, đây là những câu hỏi không mấy thiết thực, và tôi khuyên bạn không nên có lối suy nghĩ như vậy. Thay vào đó, những câu hỏi bạn nên hỏi là:   Mục đích của mình khi học một ngôn ngữ lập trình mới là gì?    Với mục đích đó thì ngôn ngữ lập trình nào là phù hợp?    Mình muốn ngôn ngữ lập trình ấy là bậc cao hay bậc thấp?   v.v.  Số lượng ngôn ngữ lập trình ngày càng tăng, và mỗi một trong số đó đều có mục đích, điểm mạnh và điểm yếu riêng biệt .        Basic Programming Part 3: Programming Languages  Video phần 03    "
},
{
  "id": "sec-pro-language-2",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-2",
  "type": "Mục Tiêu",
  "number": "3",
  "title": "",
  "body": "  Quan sát một vài ví dụ về các ngôn ngữ lập trình.  Tìm hiểu ngôn ngữ lập trình bậc cao và bậc thấp .   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-pro-language.html#def-",
  "type": "Khái Niệm",
  "number": "3.1",
  "title": "",
  "body": " Khái niệm ngôn ngữ lập trình    Ngôn ngữ lập trình là một hệ thống các ký hiệu giúp con người tạo ra các chương trình máy tính, cũng chính là đưa ra chỉ dẫn cho máy tính.  Mỗi ngôn ngữ lập trình có bộ cú pháp của riêng nó.   Cú pháp đơn giản là ngữ pháp của một ngôn ngữ lập trình. Nó đóng vai trò thiết yếu trong quá trình máy tính dịch và chạy code.   "
},
{
  "id": "sec-pro-language-4",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Python "
},
{
  "id": "sec-pro-language-6",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-6",
  "type": "Output",
  "number": "3.2",
  "title": "",
  "body": " Hello World!  "
},
{
  "id": "sec-pro-language-7",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-7",
  "type": "Giải Thích",
  "number": "3.1",
  "title": "",
  "body": " Ví dụ code bậc cao  Hàm print()   Lệnh print() có nhiệm vụ rất đơn giản là đưa dữ liệu ra terminal. Ở đây, dữ liệu đó là dòng chữ Hello World! .  "
},
{
  "id": "sec-pro-language-11",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "từ khóa "
},
{
  "id": "def-prolang-high-level",
  "level": "2",
  "url": "sec-pro-language.html#def-prolang-high-level",
  "type": "Khái Niệm",
  "number": "3.3",
  "title": "",
  "body": " Khái niệm ngôn ngữ bậc cao   Python được coi là một ngôn ngữ lập trình bậc cao vì cú pháp của nó gần gũi với tiếng Anh.   "
},
{
  "id": "sec-pro-language-14",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Assembly "
},
{
  "id": "def-prolang-low-level",
  "level": "2",
  "url": "sec-pro-language.html#def-prolang-low-level",
  "type": "Khái Niệm",
  "number": "3.4",
  "title": "",
  "body": " Khái niệm ngôn ngữ bậc thấp   Assembly được coi là một ngôn ngữ lập trình bậc thấp vì cú pháp của nó gần với ngôn ngữ máy tính.   "
},
{
  "id": "sec-pro-language-22",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-22",
  "type": "Lưu Ý",
  "number": "3.5",
  "title": "",
  "body": " Lưu ý bậc cao vs bậc thấp  Để hình dung, bạn hãy tưởng tượng ngôn ngữ lập trình bậc cao là chiếc xe ô tô gia đình rất thân thiện với người dùng, ai cũng có thể học và lái được. Khi đó, bậc thấp sẽ là chiếc xe đua F1 mà chỉ những tay đua kỳ cựu nhất mới có thể điều khiển được.  Và hiển nhiên rồi, đổi lại chiếc xe đua F1 bậc thấp sẽ có tốc độ vượt xa chiếc xe ô tô bậc cao .  "
},
{
  "id": "sec-pro-language-24",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-24",
  "type": "Chú Ý",
  "number": "3.6",
  "title": "",
  "body": " Chú ý ví dụ code  Trong bài viết này, các ví dụ code được viết bằng Python, giúp bạn theo dõi và thí nghiệm dễ dàng hơn.  Nhưng bạn cũng có thể thử các ngôn ngữ khác trong .  "
},
{
  "id": "insight-choose-pro-language",
  "level": "2",
  "url": "sec-pro-language.html#insight-choose-pro-language",
  "type": "Lưu Ý",
  "number": "3.7",
  "title": "Chọn Một Ngôn Ngữ Lập Trình.",
  "body": " Chọn Một Ngôn Ngữ Lập Trình  Lưu ý chọn một ngôn ngữ  Khi một người mới bắt đầu học lập trình, họ thường xuyên gặp phải những câu hỏi hay chủ đề như:   Nên bắt đầu với ngôn ngữ lập trình nào?    Ngôn ngữ lập trình nào nên học trong năm 2024?    Ngôn ngữ lập trình nào nên học để có việc lương cao?   v.v.  Theo tôi, đây là những câu hỏi không mấy thiết thực, và tôi khuyên bạn không nên có lối suy nghĩ như vậy. Thay vào đó, những câu hỏi bạn nên hỏi là:   Mục đích của mình khi học một ngôn ngữ lập trình mới là gì?    Với mục đích đó thì ngôn ngữ lập trình nào là phù hợp?    Mình muốn ngôn ngữ lập trình ấy là bậc cao hay bậc thấp?   v.v.  Số lượng ngôn ngữ lập trình ngày càng tăng, và mỗi một trong số đó đều có mục đích, điểm mạnh và điểm yếu riêng biệt .  "
},
{
  "id": "sec-pro-language-29",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-29",
  "type": "Video",
  "number": "3.2",
  "title": "Basic Programming — Part 3: Programming Languages.",
  "body": " Basic Programming Part 3: Programming Languages  Video phần 03   "
},
{
  "id": "sec-comment",
  "level": "1",
  "url": "sec-comment.html",
  "type": "Phần",
  "number": "4",
  "title": "Ghi Chú",
  "body": " Ghi Chú    Nhận biết và sử dụng ghi chú trong code.    Khi viết code, có những lúc bạn muốn sử dụng văn bản thường, thay vì code. Có thể bạn muốn để lại ghi chú hay giải thích cho một thuật toán nào đó, hay ghi chép lại luồng suy nghĩ bản thân khi đó. Khi code của bạn ngày càng dài và phức tạp hơn, những ghi chú này bổ sung ngữ cảnh cần thiết.   Khái niệm ghi chú    Ghi chú là những mẩu văn bản thường, không được chạy bởi trình biên dịch.  Để viết một ghi chú trong Python, sử dụng dấu thăng # . Những gì ở sau nó (trên cùng dòng) sẽ được coi là văn bản thô.     Có thể bạn sẽ hứng thú:      Liên kết các cú pháp ghi chú  \"comments in different programming languages\"      Liên kết ghi chú nhiều dòng  \"multiline comments\"        Lưu ý tắt code  Ghi chú cũng được sử dụng để tạm thời vô hiệu hóa một dòng code.   Ví dụ:    Thí Nghiệm Vui  Xóa dấu # ở dòng 5 và chạy lại đoạn code.    This is code More code    Ví dụ code ghi chú   Dòng 1 là một ghi chú dùng để chú thích.  Dòng 3 và 7 là code bình thường.  Dòng 5 là một ghi chú dùng để tắt code.        Basic Programming Part 4: Comments  Video phần 04    "
},
{
  "id": "sec-comment-2",
  "level": "2",
  "url": "sec-comment.html#sec-comment-2",
  "type": "Mục Tiêu",
  "number": "4",
  "title": "",
  "body": "  Nhận biết và sử dụng ghi chú trong code.   "
},
{
  "id": "def-comment",
  "level": "2",
  "url": "sec-comment.html#def-comment",
  "type": "Khái Niệm",
  "number": "4.1",
  "title": "",
  "body": " Khái niệm ghi chú    Ghi chú là những mẩu văn bản thường, không được chạy bởi trình biên dịch.  Để viết một ghi chú trong Python, sử dụng dấu thăng # . Những gì ở sau nó (trên cùng dòng) sẽ được coi là văn bản thô.   "
},
{
  "id": "sec-comment-6",
  "level": "2",
  "url": "sec-comment.html#sec-comment-6",
  "type": "Lưu Ý",
  "number": "4.2",
  "title": "",
  "body": " Lưu ý tắt code  Ghi chú cũng được sử dụng để tạm thời vô hiệu hóa một dòng code.  "
},
{
  "id": "sec-comment-10",
  "level": "2",
  "url": "sec-comment.html#sec-comment-10",
  "type": "Output",
  "number": "4.3",
  "title": "",
  "body": " This is code More code  "
},
{
  "id": "sec-comment-11",
  "level": "2",
  "url": "sec-comment.html#sec-comment-11",
  "type": "Giải Thích",
  "number": "4.1",
  "title": "",
  "body": " Ví dụ code ghi chú   Dòng 1 là một ghi chú dùng để chú thích.  Dòng 3 và 7 là code bình thường.  Dòng 5 là một ghi chú dùng để tắt code.  "
},
{
  "id": "sec-comment-13",
  "level": "2",
  "url": "sec-comment.html#sec-comment-13",
  "type": "Video",
  "number": "4.2",
  "title": "Basic Programming — Part 4: Comments.",
  "body": " Basic Programming Part 4: Comments  Video phần 04   "
},
{
  "id": "sec-variable",
  "level": "1",
  "url": "sec-variable.html",
  "type": "Phần",
  "number": "5",
  "title": "Biến",
  "body": " Biến    Tìm hiểu biến và cách dùng biến.  Hiểu rằng dấu bằng = không liên quan đến đẳng thức trong lập trình.     Biến là một trong những khái niệm cơ bản và quan trọng nhất của lập trình.  Trong toán học, ta thường hay thấy biến số trong các hàm số, ví dụ như: Ở đây, biến có nghĩa là có thể thay đổi và không cố định.   Khái niệm biến   Trong lập trình, biến được dùng để lưu trữ dữ liệu.  Dữ liệu được chứa trong biến được gọi là giá trị của biến, và nó thường xuyên được cập nhật trong quá trình chương trình chạy.  Thuật ngữ để chỉ việc tạo ra một biến mới là khai báo .  Thuật ngữ để chỉ việc cập nhật giá trị của một biến đã tồn tại là gán .     Khai bào và gán  Cú pháp khai báo  Cú pháp gán  Để khai báo biến hoặc gán cho biết giá trị mới, ta đều sử dụng dấu = :   Vì vậy, dấu bằng = trong lập trình không bao giờ được dùng theo nghĩa của đẳng thức.   Ví dụ (nên dùng CodeLens):   a = 1 b = a print(a) print(b) # Update variable a = 2 print(a) print(b)    1 1 2 1    Ví dụ code gán  Ví dụ code khai báo   Đầu tiên, ta khai báo biến a và gán cho nó giá trị là 1 .  Tiếp, ta khai báo b và gán cho nó giá trị bằng giá trị hiện tại của a , vậy b cũng có giá trị là 1 .  Ta sử dụng lệnh print() để truy cập và hiển thị giá trị hiện tại của hai biến ra terminal.  Sau đó, ta gán cho a giá trị mới là 2 , nhưng ta không động đến b .   Thí Nghiệm Vui  Nếu sau khi cập nhật biến a , ta muốn biến b lại có giá trị bằng a , thì ta phải cập nhật b một lần nữa.    Chú ý đẳng thức  Chú ý : Nếu đến bước này bạn nghĩ rằng cả a và b đều có giá trị là 2 , thì bạn vẫn đang hiểu dấu bằng theo nghĩa của đẳng thức. Điều này là không đúng đối với lập trình.  Cuối cùng, ta lại dùng print() để quan sát sự khác biệt.    Lưu ý đẳng thức  Ví dụ trên về biến, dù đơn giản, đã làm rối não nhiều người mới bắt đầu, đặc biệt là những ai có bộ não toán học. Vì họ thấy b = a nên họ nghĩ đây là một đẳng thức luôn đúng trong suốt vòng đời của chương trình. Nhưng lối suy nghĩ đó là sai đối với lập trình.    Đặt tên cho biến  Chú ý tên biến  Quy ước tên biến   Có thể bạn sẽ hứng thú:      Liên kết tên biến hợp lệ  \"what variable names are allowed in Python\"      Liên kết Python quy ước đặt tên biến  \"variable naming conventions in Python\"       Tên của một biến có một vài quy tắc. Những tên biến sau sẽ làm xuất hiện lỗi cú pháp:   my var = 5 (chứa khoảng trắng)   #my_var = 5 (chứa ký tự đặc biệt)   1st_var = 5 (bắt đầu với chữ số)   print = 5 (trùng với một từ khóa có sẵn)    Tránh những trường hợp trên, và bạn có thể đặt tên biến tùy thích. Vì vậy, tùy vào cá thể lập trình viên, tên biến sẽ rất đa dạng:  house_address  houseAddress  HouseAddress  ha  hAddress  house_add       Trong thế giới lập trình, có rất nhiều quy ước khác nhau về cách đặt tên biến.  Đặt tên biến cho phù hợp là một kỹ năng, nhưng bài viết này sẽ không hướng dẫn việc đó. Tên biến trong các ví dụ code ưu tiên sự ngắn gọn và dễ hiểu .        Basic Programming Part 5: Variables  Video phần 05    "
},
{
  "id": "sec-variable-2",
  "level": "2",
  "url": "sec-variable.html#sec-variable-2",
  "type": "Mục Tiêu",
  "number": "5",
  "title": "",
  "body": "  Tìm hiểu biến và cách dùng biến.  Hiểu rằng dấu bằng = không liên quan đến đẳng thức trong lập trình.   "
},
{
  "id": "sec-variable-3",
  "level": "2",
  "url": "sec-variable.html#sec-variable-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Biến "
},
{
  "id": "def-variable",
  "level": "2",
  "url": "sec-variable.html#def-variable",
  "type": "Khái Niệm",
  "number": "5.1",
  "title": "",
  "body": " Khái niệm biến   Trong lập trình, biến được dùng để lưu trữ dữ liệu.  Dữ liệu được chứa trong biến được gọi là giá trị của biến, và nó thường xuyên được cập nhật trong quá trình chương trình chạy.  Thuật ngữ để chỉ việc tạo ra một biến mới là khai báo .  Thuật ngữ để chỉ việc cập nhật giá trị của một biến đã tồn tại là gán .   "
},
{
  "id": "sec-variable-6",
  "level": "2",
  "url": "sec-variable.html#sec-variable-6",
  "type": "Cú Pháp",
  "number": "5.2",
  "title": "Khai bào và gán.",
  "body": " Khai bào và gán  Cú pháp khai báo  Cú pháp gán  Để khai báo biến hoặc gán cho biết giá trị mới, ta đều sử dụng dấu = :   Vì vậy, dấu bằng = trong lập trình không bao giờ được dùng theo nghĩa của đẳng thức.  "
},
{
  "id": "sec-variable-9",
  "level": "2",
  "url": "sec-variable.html#sec-variable-9",
  "type": "Output",
  "number": "5.3",
  "title": "",
  "body": " 1 1 2 1  "
},
{
  "id": "sec-variable-10",
  "level": "2",
  "url": "sec-variable.html#sec-variable-10",
  "type": "Giải Thích",
  "number": "5.1",
  "title": "",
  "body": " Ví dụ code gán  Ví dụ code khai báo   Đầu tiên, ta khai báo biến a và gán cho nó giá trị là 1 .  Tiếp, ta khai báo b và gán cho nó giá trị bằng giá trị hiện tại của a , vậy b cũng có giá trị là 1 .  Ta sử dụng lệnh print() để truy cập và hiển thị giá trị hiện tại của hai biến ra terminal.  Sau đó, ta gán cho a giá trị mới là 2 , nhưng ta không động đến b .   Thí Nghiệm Vui  Nếu sau khi cập nhật biến a , ta muốn biến b lại có giá trị bằng a , thì ta phải cập nhật b một lần nữa.    Chú ý đẳng thức  Chú ý : Nếu đến bước này bạn nghĩ rằng cả a và b đều có giá trị là 2 , thì bạn vẫn đang hiểu dấu bằng theo nghĩa của đẳng thức. Điều này là không đúng đối với lập trình.  Cuối cùng, ta lại dùng print() để quan sát sự khác biệt.  "
},
{
  "id": "sec-variable-11",
  "level": "2",
  "url": "sec-variable.html#sec-variable-11",
  "type": "Lưu Ý",
  "number": "5.4",
  "title": "",
  "body": " Lưu ý đẳng thức  Ví dụ trên về biến, dù đơn giản, đã làm rối não nhiều người mới bắt đầu, đặc biệt là những ai có bộ não toán học. Vì họ thấy b = a nên họ nghĩ đây là một đẳng thức luôn đúng trong suốt vòng đời của chương trình. Nhưng lối suy nghĩ đó là sai đối với lập trình.  "
},
{
  "id": "sec-variable-12",
  "level": "2",
  "url": "sec-variable.html#sec-variable-12",
  "type": "Chú Ý",
  "number": "5.5",
  "title": "Đặt tên cho biến.",
  "body": " Đặt tên cho biến  Chú ý tên biến  Quy ước tên biến   Có thể bạn sẽ hứng thú:      Liên kết tên biến hợp lệ  \"what variable names are allowed in Python\"      Liên kết Python quy ước đặt tên biến  \"variable naming conventions in Python\"       Tên của một biến có một vài quy tắc. Những tên biến sau sẽ làm xuất hiện lỗi cú pháp:   my var = 5 (chứa khoảng trắng)   #my_var = 5 (chứa ký tự đặc biệt)   1st_var = 5 (bắt đầu với chữ số)   print = 5 (trùng với một từ khóa có sẵn)    Tránh những trường hợp trên, và bạn có thể đặt tên biến tùy thích. Vì vậy, tùy vào cá thể lập trình viên, tên biến sẽ rất đa dạng:  house_address  houseAddress  HouseAddress  ha  hAddress  house_add       Trong thế giới lập trình, có rất nhiều quy ước khác nhau về cách đặt tên biến.  Đặt tên biến cho phù hợp là một kỹ năng, nhưng bài viết này sẽ không hướng dẫn việc đó. Tên biến trong các ví dụ code ưu tiên sự ngắn gọn và dễ hiểu .  "
},
{
  "id": "sec-variable-14",
  "level": "2",
  "url": "sec-variable.html#sec-variable-14",
  "type": "Video",
  "number": "5.2",
  "title": "Basic Programming — Part 5: Variables.",
  "body": " Basic Programming Part 5: Variables  Video phần 05   "
},
{
  "id": "sec-data-type",
  "level": "1",
  "url": "sec-data-type.html",
  "type": "Phần",
  "number": "6",
  "title": "Kiểu Dữ Liệu",
  "body": " Kiểu Dữ Liệu    Tìm hiểu các kiểu dữ liệu và cách dùng chúng.  Tìm hiểu các tương tác giữa các kiểu dữ liệu.    Hầu hết mọi thứ trên thế giới này đều có thể được lưu trữ thành dữ liệu từ số liệu và chữ cái đến thông tin về một mẫu xe ô tô.   Khái niệm kiểu dữ liệu   Và để phân loại các dữ liệu đó, ta cần đến các kiểu dữ liệu .     Khái quát kiểu dữ liệu Hầu hết các ngôn ngữ lập trình hiện đại đều có các kiểu dữ liệu sau:   str   Chuỗi ký tự . Được bao quanh bởi dấu ngoặc kép \"\" hoặc dấu ngoặc kép đơn '' .    int   Số nguyên . Là một số thực không có các chữ số thập phân.    float   Số dấu phẩy động . Là một số thực có một hoặc nhiều chữ số thập phân.    bool   Boolean chỉ chứa một trong hai giá trị True hoặc False . Được dùng chủ yếu trong những câu lệnh điều kiện.      Có thể bạn sẽ hứng thú      Liên kết Python là dynamically typed  \"Python is dynamically typed\"        Liên kết static vs dynamic typing  example of static vs dynamic typing        Chú ý xác định kiểu dữ liệu  Python là một ngôn ngữ dynamically typed. Điều này nghĩa là khi một biết được khai báo hoặc cập nhật, kiểu dữ liệu của nó được xác định, hoặc tái xác định, một cách tự động .   Ví dụ (nên dùng CodeLens):   a = 5 b = type(a) print(a, b) a = \"5\" b = type(a) print(a, b)    5 <class 'int'> 5 <class 'str'>    Ví dụ code kiểu dữ liệu  Hàm type()   Lệnh type(a) cho kết quả là kiểu dữ liệu của biến a , được ghi trong dấu ngoặc kép đơn.  (Bạn không cần băn khoăn về từ khóa class ở đây. Bạn có thể hiểu nó đang viết tắt cho từ classify , nghĩa là phân loại . Nhưng chính xác hơn thì nó đang đề cập tới Lớp , một chủ đề nâng cao hơn được bàn bạc ở .)   Thí Nghiệm Vui   5 có khác so với 5.0 không?   Vậy, khi khai báo a = 5 , biến a có kiểu int .  Còn khi gán cho a giá trị mới là \"5\" , nó tự động cập nhật thành kiểu str .   Từ ví dụ trên, ta thấy a = \"5\" rất khác so với a = 5 . Khi dữ liệu được bao quanh bởi hai dấu ngoặc kép (đơn), nó chắc chắn thuộc kiểu str . Từ đó, ta có định nghĩa sau:   Khái niệm cú pháp kiểu dữ liệu   Kiểu dữ liệu khác nhau có cú pháp khác nhau.    Một vài ví dụ về các kiểu dữ liệu chính:    <class 'int'> <class 'float'> <class 'str'> <class 'bool'>    Ví dụ code kiểu dữ liệu   Giống như trên.  Một lần nữa, bạn chưa cần quan tấm đến class .   Tiếp theo, ta có:   Khái niệm tương tác giữa dữ liệu   Kiểu dữ liệu quyết định các tương tác có thể giữa dữ liệu.  Nói cách khác, có rất nhiều loại tương tác có thể xảy ra giữa dữ liệu (phép toán, phép nối chuỗi, v.v.), và chúng thay đổi dựa vào kiểu dữ liệu.    Ví dụ:    3 9.1 8.5    Ví dụ code tương tác giữa dữ liệu   Ta biết cả a và b đều có kiểu int . Vì vậy, cộng chúng lại là có lý và được phép.  Tương tự, c và d đều là float , vì vậy phép cộng là hợp lệ.  Dòng cuối cùng thú vị hơn một chút, vì ta vẫn có thể thực hiện phép cộng giữa int và float .   Ta cũng có thể cộng hai hay nhiều str với nhau. Việc này ghép chúng lại thành một chuỗi mới. Ví dụ:    HelloJack Hello Jane    Ví dụ code phép nối chuỗi    s1 + s2 là một tương tác hợp lệ và sẽ ghép chúng lại thành một chuỗi mới. Tương tự với s1 + s3 .  Ta thấy chuỗi s2 và s3 có một chi tiết khác nhau. Sự khác biệt này được làm rõ qua phép nối chuỗi.   Nhưng ta không thể cộng int với str . Làm vậy sẽ xuất hiện lỗi :   Có thể bạn sẽ hứng thú      Liên kết Python nối int với chuỗi  \"Python how to add int to string\"         TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'    Ví dụ code tương tác dữ liệu không hợp lệ   Phép + là một tương tác không hợp lệ cho hai kiểu dữ liệu int và str .        Basic Programming Part 6: Data Types  Video phần 06    "
},
{
  "id": "sec-data-type-2",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-2",
  "type": "Mục Tiêu",
  "number": "6",
  "title": "",
  "body": "  Tìm hiểu các kiểu dữ liệu và cách dùng chúng.  Tìm hiểu các tương tác giữa các kiểu dữ liệu.   "
},
{
  "id": "def-data-type",
  "level": "2",
  "url": "sec-data-type.html#def-data-type",
  "type": "Khái Niệm",
  "number": "6.1",
  "title": "",
  "body": " Khái niệm kiểu dữ liệu   Và để phân loại các dữ liệu đó, ta cần đến các kiểu dữ liệu .   "
},
{
  "id": "sec-data-type-5",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chuỗi ký tự Số nguyên Số dấu phẩy động Boolean "
},
{
  "id": "sec-data-type-7",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-7",
  "type": "Chú Ý",
  "number": "6.2",
  "title": "",
  "body": " Chú ý xác định kiểu dữ liệu  Python là một ngôn ngữ dynamically typed. Điều này nghĩa là khi một biết được khai báo hoặc cập nhật, kiểu dữ liệu của nó được xác định, hoặc tái xác định, một cách tự động .  "
},
{
  "id": "sec-data-type-10",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-10",
  "type": "Output",
  "number": "6.3",
  "title": "",
  "body": " 5 <class 'int'> 5 <class 'str'>  "
},
{
  "id": "sec-data-type-11",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-11",
  "type": "Giải Thích",
  "number": "6.1",
  "title": "",
  "body": " Ví dụ code kiểu dữ liệu  Hàm type()   Lệnh type(a) cho kết quả là kiểu dữ liệu của biến a , được ghi trong dấu ngoặc kép đơn.  (Bạn không cần băn khoăn về từ khóa class ở đây. Bạn có thể hiểu nó đang viết tắt cho từ classify , nghĩa là phân loại . Nhưng chính xác hơn thì nó đang đề cập tới Lớp , một chủ đề nâng cao hơn được bàn bạc ở .)   Thí Nghiệm Vui   5 có khác so với 5.0 không?   Vậy, khi khai báo a = 5 , biến a có kiểu int .  Còn khi gán cho a giá trị mới là \"5\" , nó tự động cập nhật thành kiểu str .  "
},
{
  "id": "def-dtype-syntax",
  "level": "2",
  "url": "sec-data-type.html#def-dtype-syntax",
  "type": "Khái Niệm",
  "number": "6.4",
  "title": "",
  "body": " Khái niệm cú pháp kiểu dữ liệu   Kiểu dữ liệu khác nhau có cú pháp khác nhau.   "
},
{
  "id": "sec-data-type-16",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-16",
  "type": "Output",
  "number": "6.5",
  "title": "",
  "body": " <class 'int'> <class 'float'> <class 'str'> <class 'bool'>  "
},
{
  "id": "sec-data-type-17",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-17",
  "type": "Giải Thích",
  "number": "6.2",
  "title": "",
  "body": " Ví dụ code kiểu dữ liệu   Giống như trên.  Một lần nữa, bạn chưa cần quan tấm đến class .  "
},
{
  "id": "def-dtype-interaction",
  "level": "2",
  "url": "sec-data-type.html#def-dtype-interaction",
  "type": "Khái Niệm",
  "number": "6.6",
  "title": "",
  "body": " Khái niệm tương tác giữa dữ liệu   Kiểu dữ liệu quyết định các tương tác có thể giữa dữ liệu.  Nói cách khác, có rất nhiều loại tương tác có thể xảy ra giữa dữ liệu (phép toán, phép nối chuỗi, v.v.), và chúng thay đổi dựa vào kiểu dữ liệu.   "
},
{
  "id": "sec-data-type-22",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-22",
  "type": "Output",
  "number": "6.7",
  "title": "",
  "body": " 3 9.1 8.5  "
},
{
  "id": "sec-data-type-23",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-23",
  "type": "Giải Thích",
  "number": "6.3",
  "title": "",
  "body": " Ví dụ code tương tác giữa dữ liệu   Ta biết cả a và b đều có kiểu int . Vì vậy, cộng chúng lại là có lý và được phép.  Tương tự, c và d đều là float , vì vậy phép cộng là hợp lệ.  Dòng cuối cùng thú vị hơn một chút, vì ta vẫn có thể thực hiện phép cộng giữa int và float .  "
},
{
  "id": "sec-data-type-26",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-26",
  "type": "Output",
  "number": "6.8",
  "title": "",
  "body": " HelloJack Hello Jane  "
},
{
  "id": "sec-data-type-27",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-27",
  "type": "Giải Thích",
  "number": "6.4",
  "title": "",
  "body": " Ví dụ code phép nối chuỗi    s1 + s2 là một tương tác hợp lệ và sẽ ghép chúng lại thành một chuỗi mới. Tương tự với s1 + s3 .  Ta thấy chuỗi s2 và s3 có một chi tiết khác nhau. Sự khác biệt này được làm rõ qua phép nối chuỗi.  "
},
{
  "id": "sec-data-type-28",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lỗi "
},
{
  "id": "sec-data-type-31",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-31",
  "type": "Output",
  "number": "6.9",
  "title": "",
  "body": " TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'  "
},
{
  "id": "sec-data-type-32",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-32",
  "type": "Giải Thích",
  "number": "6.5",
  "title": "",
  "body": " Ví dụ code tương tác dữ liệu không hợp lệ   Phép + là một tương tác không hợp lệ cho hai kiểu dữ liệu int và str .  "
},
{
  "id": "sec-data-type-34",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-34",
  "type": "Video",
  "number": "6.6",
  "title": "Basic Programming — Part 6: Data Types.",
  "body": " Basic Programming Part 6: Data Types  Video phần 06   "
},
{
  "id": "sec-data-structure",
  "level": "1",
  "url": "sec-data-structure.html",
  "type": "Phần",
  "number": "7",
  "title": "Cấu Trúc Dữ Liệu",
  "body": " Cấu Trúc Dữ Liệu    Tìm hiểu các cấu trúc dữ liệu.  Quan sát hai ví dụ danh sách và từ điển .      Ví dụ code không dùng danh sách Cho đến nay, biến luôn chứa một giá trị duy nhất. Giả sử ta có một chương trình để chứa 100 số chính phương. Nó có thể trông như sau:   ps1 = 0 ps2 = 1 ps3 = 4 ps4 = 9 # ... ps100 = 9801   Đoạn code trên không thực tế cho lắm. Để giảm số lượng biến, ta có thể sử dụng một đối tượng mới cấu trúc dữ liệu .   Khái niệm cấu trúc dữ liệu    Cấu trúc dữ liệu là một dữ liệu có khả năng chứa cùng một lúc nhiều dữ liệu khác.  Các dữ liệu con của một cấu trúc dữ liệu được gọi là phần tử .  Cấu trúc dữ liệu được xây dựng dựa trên kiểu dữ liệu, vì vậy những kiến thức ở có thể được áp dụng.     Ví dụ code dùng danh sách Từ đó, ta có thể cải thiện chương trình trên như sau:   ps = [0, 1, 4, 9, ..., 9801]   Mặc dù vẫn không mấy thực tế (ta vẫn phải gõ 100 số), phiên bản này tốt hơn trước rất nhiều. Thay vì tạo ra 100 biến khác nhau, ta chỉ cần một biến có khả năng chứa 100 giá trị. (Đây là một danh sách , sẽ được bàn tới dưới đây.)  Mỗi ngôn ngữ lập trình đều có tập hợp các cấu trúc dữ liệu của riêng mình. Mỗi cấu trúc dữ liệu đều có điểm mạnh và điểm yếu của mình.  Bây giờ ta sẽ tìm hiểu hai cấu trúc dữ liệu phổ biến nhất danh sách (mảng) và từ điển .   Chú ý tìm hiểu cấu trúc dữ liệu  Hai tiểu mục sắp tới sẽ chỉ giới thiệu sơ bộ hai đối tượng trên.      Danh Sách (Mảng)   Khái niệm danh sách    Danh sách có thể chứa nhiều giá trị cùng một lúc.  Các phần tử của một danh sách trong Python có thể thuộc các kiểu dữ liệu khác nhau .     Có thể bạn sẽ hứng thú      Liên kết Python danh sách vs mảng  \"Python lists vs arrays\"        Chú ý danh sách vs mảng  Trong một vài ngôn ngữ lập trình khác, có một kiểu dữ liệu tên là mảng . Nó hoạt động tương tự một danh sách trong Python.  Python cũng có mảng, nhưng với một cách hoạt động hơi khác so với mảng trong các ngôn ngữ khác. Điều này cho thấy trong các ngôn ngữ, các kiểu dữ liệu có thể có cùng tên, nhưng khác cách hoạt động, hoặc ngược lại.  Thông thường thì cái tên mảng được biết đến nhiều hơn danh sách .   Ví dụ:   Thí Nghiệm Vui  Thêm phần tử vào danh sách.     [1 2 3] <class 'list'> [1 2.5 3] <class 'list'> [1 'test' 3] <class 'list'>    Ví dụ code dùng danh sách   Ta khai báo 3 danh sách. Mỗi danh sách có 3 phần tử.  Các phần tử của l1 đều là số nguyên.  Danh sách l2 chứa hai int và một float .  Danh sách l3 có hai int và một str .  Lệnh type() cho ta biết kiểu dữ liệu của chúng là list .    Chú ý dùng danh sách  Có thể thấy, danh sách có một cú pháp riêng biệt. Nhưng ta sẽ chưa đi sâu vào cú pháp và cách sử dụng của nó. Tham khảo để tìm hiểu thêm về danh sách.     Từ Điển   Khái niệm từ điển    Từ điển có thể chứa nhiều cặp từ khóa:giá trị (key:value ).  Nó thường được dùng để lưu trữ thông tin miêu tả.    Ví dụ:   Thí Nghiệm Vui  Thêm thông tin miêu tả Steve.     {'name': 'Steve', 'gender': 'male', 'dob': 1980, 'hobbies': ['apples', 'swimming', 'programming'], 5: 'random'} <class 'dict'>    Ví dụ code dùng từ điển   Ta khai báo một từ điển với 5 phần tử là các cặp key:value.  Có thể thấy, các từ khóa và giá trị có thể thuộc các kiểu dữ liệu khác nhau.  Lệnh type() cho ta biết kiểu dữ liệu của nó là dict .    Chú ý dùng từ điển  Một lần nữa, từ điển có một cú pháp riêng biệt. Nhưng ta sẽ chưa đi sâu vào cú pháp và cách sử dụng của nó. Tham khảo để tìm hiểu thêm về từ điển.          Basic Programming Part 7: Data Structures  Video phần 07     "
},
{
  "id": "sec-data-structure-2",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-2",
  "type": "Mục Tiêu",
  "number": "7",
  "title": "",
  "body": "  Tìm hiểu các cấu trúc dữ liệu.  Quan sát hai ví dụ danh sách và từ điển .   "
},
{
  "id": "sec-data-structure-3-3",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cấu trúc dữ liệu "
},
{
  "id": "def-data-structure",
  "level": "2",
  "url": "sec-data-structure.html#def-data-structure",
  "type": "Khái Niệm",
  "number": "7.1",
  "title": "",
  "body": " Khái niệm cấu trúc dữ liệu    Cấu trúc dữ liệu là một dữ liệu có khả năng chứa cùng một lúc nhiều dữ liệu khác.  Các dữ liệu con của một cấu trúc dữ liệu được gọi là phần tử .  Cấu trúc dữ liệu được xây dựng dựa trên kiểu dữ liệu, vì vậy những kiến thức ở có thể được áp dụng.   "
},
{
  "id": "sec-data-structure-3-7",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "danh sách "
},
{
  "id": "sec-data-structure-3-9",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "danh sách (mảng) từ điển "
},
{
  "id": "sec-data-structure-3-10",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-10",
  "type": "Chú Ý",
  "number": "7.2",
  "title": "",
  "body": " Chú ý tìm hiểu cấu trúc dữ liệu  Hai tiểu mục sắp tới sẽ chỉ giới thiệu sơ bộ hai đối tượng trên.   "
},
{
  "id": "def-list",
  "level": "2",
  "url": "sec-data-structure.html#def-list",
  "type": "Khái Niệm",
  "number": "7.3",
  "title": "",
  "body": " Khái niệm danh sách    Danh sách có thể chứa nhiều giá trị cùng một lúc.  Các phần tử của một danh sách trong Python có thể thuộc các kiểu dữ liệu khác nhau .   "
},
{
  "id": "subsec-list-4",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-4",
  "type": "Chú Ý",
  "number": "7.4",
  "title": "",
  "body": " Chú ý danh sách vs mảng  Trong một vài ngôn ngữ lập trình khác, có một kiểu dữ liệu tên là mảng . Nó hoạt động tương tự một danh sách trong Python.  Python cũng có mảng, nhưng với một cách hoạt động hơi khác so với mảng trong các ngôn ngữ khác. Điều này cho thấy trong các ngôn ngữ, các kiểu dữ liệu có thể có cùng tên, nhưng khác cách hoạt động, hoặc ngược lại.  Thông thường thì cái tên mảng được biết đến nhiều hơn danh sách .  "
},
{
  "id": "subsec-list-8",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-8",
  "type": "Output",
  "number": "7.5",
  "title": "",
  "body": " [1 2 3] <class 'list'> [1 2.5 3] <class 'list'> [1 'test' 3] <class 'list'>  "
},
{
  "id": "subsec-list-9",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-9",
  "type": "Giải Thích",
  "number": "7.1",
  "title": "",
  "body": " Ví dụ code dùng danh sách   Ta khai báo 3 danh sách. Mỗi danh sách có 3 phần tử.  Các phần tử của l1 đều là số nguyên.  Danh sách l2 chứa hai int và một float .  Danh sách l3 có hai int và một str .  Lệnh type() cho ta biết kiểu dữ liệu của chúng là list .  "
},
{
  "id": "subsec-list-10",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-10",
  "type": "Chú Ý",
  "number": "7.6",
  "title": "",
  "body": " Chú ý dùng danh sách  Có thể thấy, danh sách có một cú pháp riêng biệt. Nhưng ta sẽ chưa đi sâu vào cú pháp và cách sử dụng của nó. Tham khảo để tìm hiểu thêm về danh sách.  "
},
{
  "id": "def-dictionary",
  "level": "2",
  "url": "sec-data-structure.html#def-dictionary",
  "type": "Khái Niệm",
  "number": "7.7",
  "title": "",
  "body": " Khái niệm từ điển    Từ điển có thể chứa nhiều cặp từ khóa:giá trị (key:value ).  Nó thường được dùng để lưu trữ thông tin miêu tả.   "
},
{
  "id": "subsec-dictionary-6",
  "level": "2",
  "url": "sec-data-structure.html#subsec-dictionary-6",
  "type": "Output",
  "number": "7.8",
  "title": "",
  "body": " {'name': 'Steve', 'gender': 'male', 'dob': 1980, 'hobbies': ['apples', 'swimming', 'programming'], 5: 'random'} <class 'dict'>  "
},
{
  "id": "subsec-dictionary-7",
  "level": "2",
  "url": "sec-data-structure.html#subsec-dictionary-7",
  "type": "Giải Thích",
  "number": "7.2",
  "title": "",
  "body": " Ví dụ code dùng từ điển   Ta khai báo một từ điển với 5 phần tử là các cặp key:value.  Có thể thấy, các từ khóa và giá trị có thể thuộc các kiểu dữ liệu khác nhau.  Lệnh type() cho ta biết kiểu dữ liệu của nó là dict .  "
},
{
  "id": "subsec-dictionary-8",
  "level": "2",
  "url": "sec-data-structure.html#subsec-dictionary-8",
  "type": "Chú Ý",
  "number": "7.9",
  "title": "",
  "body": " Chú ý dùng từ điển  Một lần nữa, từ điển có một cú pháp riêng biệt. Nhưng ta sẽ chưa đi sâu vào cú pháp và cách sử dụng của nó. Tham khảo để tìm hiểu thêm về từ điển.  "
},
{
  "id": "sec-data-structure-6-2",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-6-2",
  "type": "Video",
  "number": "7.3",
  "title": "Basic Programming — Part 7: Data Structures.",
  "body": " Basic Programming Part 7: Data Structures  Video phần 07   "
},
{
  "id": "sec-operator",
  "level": "1",
  "url": "sec-operator.html",
  "type": "Phần",
  "number": "8",
  "title": "Toán Tử",
  "body": " Toán Tử    Tìm hiểu bốn loại toán tử chính.  Hiểu rõ toán tử gán qua ví dụ.      Khái niệm toán tử   Trong lập trình, toán tử là một ký tự miêu tả phép gán, phép toán, phép quan hệ, hoặc phép logic.  Nói cách khác, toán tử miêu tả một tương tác dữ liệu.    Ở các phần trước, trong các ví dụ thường xuyên xuất hiện hai toán tử = và + . Ta cùng tìm hiểu những toán tử cơ bản nhé.    Toán Tử Số Học  Bốn toán tử số học cơ bản nhất là:   Thí Nghiệm Vui  Trong bốn toán tử này, bạn nghĩ cái nào có thể hoạt động với các ?     8 2 15 1.6666666666666667 string 1 string 2    Ví dụ code toán tử số học  Ví dụ code phép nối chuỗi   Bốn dòng đầu là các phép tính như trong toán học.  Ở dòng 7, toán tử + được dùng để ghép hai chuỗi ký tự với nhau.   Ta cũng có một vài toán tử khác ít phổ biến hơn như:    1 125 2    Ví dụ code toán tử số học   Bạn có thể tra mạng để tìm hiểu thêm nhé.   Và một kiến thức quan trọng bạn nên nhớ là .    Toán Tử Gán  Bạn đã thấy = được sử dụng rất thường xuyên. Đây là toán tử gán  quan trọng nhất mà bạn cần biết.   Khái niệm toán tử gán    Toán tử gán được dùng để khai báo biến hoặc cập nhật giá trị của biến.  Giá trị của một biến thay đổi khi và chỉ khi ta sử dụng toán tử gán.     Chú ý đẳng thức  Trong lập trình, toán tử gán = không bao giờ mang nghĩa của đẳng thức.   Ví dụ (nên dùng CodeLens):   a = 5 print(a) a + 1 print(a) a = a + 1 print(a)    5 5 6    Ví dụ code khai báo  Ví dụ code gán  Ví dụ code cập nhật biến   Đầu tiên, ta khai báo a có giá trị bằng 5 .  Ở dòng 4, ta có a + 1 , nhưng khi ta truy cập giá trị của a ở dòng 5, kết quả vẫn là 5 .  Ở dòng 7, ta cập nhật biến với a = a + 1 . Vì vậy, ở dòng 8 a mới có giá trị bằng 6 .    Chú ý toán tử gán Về lý thuyết, = là toán tử gán duy nhất bạn cần biết. Nhưng ta cũng có những toán tử gán khác giúp bạn viết nhanh phép gán:   Thí Nghiệm Vui  Bạn thử dùng chúng nhé.      x += 5  Tương đương với x = x + 5     x -= 5  Tương đương với x = x - 5     x *= 5  Tương đương với x = x * 5     x \/= 5  Tương đương với x = x \/ 5        Toán Tử Quan Hệ   Toán tử quan hệ được sử dụng chủ yếu trong các câu lệnh điều kiện, vì vậy nó sẽ được trình bày rõ hơn ở .   Có thể bạn sẽ hứng thú      Liên kết Python = vs ==  \"Python = vs ==\"        Khái quát toán tử quan hệ Tóm tắt sơ bộ:   x == y  Trả lại True nếu x bằng y  Trả lại False nếu x không bằng y    x != y  Ngược lại với x == y     x < y  Trả lại True nếu x nhỏ hơn y  Trả lại False nếu x lớn hơn hoặc bằng y    x > y  Trả lại True nếu x lớn hơn y  Trả lại False nếu x nhỏ hơn hoặc bằng y    x <= y  Ngược lại với x > y     x >= y  Ngược lại với x < y        Toán Tử Logic   Toán tử logic được sử dụng chủ yếu trong các câu lệnh điều kiện, vì vậy nó sẽ được trình bày rõ hơn ở .   Khái quát toán tử logic Tóm tắt sơ bộ:   x and y  Trả lại True nếu cả hai biểu thức đều bằng True   Trả lại False nếu ít nhất một trong hai biểu thức bằng False     x or y  Trả lại True nếu ít nhất một trong hai biểu thức bằng True   Trả lại False nếu cả hai biểu thức đều bằng False     not x  Đảo ngược Boolean  Trả lại True nếu x bằng False và ngược lại.            Basic Programming Part 8: Operators  Video phần 08     "
},
{
  "id": "sec-operator-2",
  "level": "2",
  "url": "sec-operator.html#sec-operator-2",
  "type": "Mục Tiêu",
  "number": "8",
  "title": "",
  "body": "  Tìm hiểu bốn loại toán tử chính.  Hiểu rõ toán tử gán qua ví dụ.   "
},
{
  "id": "def-operator",
  "level": "2",
  "url": "sec-operator.html#def-operator",
  "type": "Khái Niệm",
  "number": "8.1",
  "title": "",
  "body": " Khái niệm toán tử   Trong lập trình, toán tử là một ký tự miêu tả phép gán, phép toán, phép quan hệ, hoặc phép logic.  Nói cách khác, toán tử miêu tả một tương tác dữ liệu.   "
},
{
  "id": "subsec-op-arithmetic-5",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-5",
  "type": "Output",
  "number": "8.2",
  "title": "",
  "body": " 8 2 15 1.6666666666666667 string 1 string 2  "
},
{
  "id": "subsec-op-arithmetic-6",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-6",
  "type": "Giải Thích",
  "number": "8.1",
  "title": "",
  "body": " Ví dụ code toán tử số học  Ví dụ code phép nối chuỗi   Bốn dòng đầu là các phép tính như trong toán học.  Ở dòng 7, toán tử + được dùng để ghép hai chuỗi ký tự với nhau.  "
},
{
  "id": "subsec-op-arithmetic-9",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-9",
  "type": "Output",
  "number": "8.3",
  "title": "",
  "body": " 1 125 2  "
},
{
  "id": "subsec-op-arithmetic-10",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-10",
  "type": "Giải Thích",
  "number": "8.2",
  "title": "",
  "body": " Ví dụ code toán tử số học   Bạn có thể tra mạng để tìm hiểu thêm nhé.  "
},
{
  "id": "subsec-op-assignment-2",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "toán tử gán "
},
{
  "id": "def-op-assignment",
  "level": "2",
  "url": "sec-operator.html#def-op-assignment",
  "type": "Khái Niệm",
  "number": "8.4",
  "title": "",
  "body": " Khái niệm toán tử gán    Toán tử gán được dùng để khai báo biến hoặc cập nhật giá trị của biến.  Giá trị của một biến thay đổi khi và chỉ khi ta sử dụng toán tử gán.   "
},
{
  "id": "subsec-op-assignment-4",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-4",
  "type": "Chú Ý",
  "number": "8.5",
  "title": "",
  "body": " Chú ý đẳng thức  Trong lập trình, toán tử gán = không bao giờ mang nghĩa của đẳng thức.  "
},
{
  "id": "subsec-op-assignment-7",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-7",
  "type": "Output",
  "number": "8.6",
  "title": "",
  "body": " 5 5 6  "
},
{
  "id": "subsec-op-assignment-8",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-8",
  "type": "Giải Thích",
  "number": "8.3",
  "title": "",
  "body": " Ví dụ code khai báo  Ví dụ code gán  Ví dụ code cập nhật biến   Đầu tiên, ta khai báo a có giá trị bằng 5 .  Ở dòng 4, ta có a + 1 , nhưng khi ta truy cập giá trị của a ở dòng 5, kết quả vẫn là 5 .  Ở dòng 7, ta cập nhật biến với a = a + 1 . Vì vậy, ở dòng 8 a mới có giá trị bằng 6 .  "
},
{
  "id": "subsec-op-relational-2",
  "level": "2",
  "url": "sec-operator.html#subsec-op-relational-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Toán tử quan hệ "
},
{
  "id": "subsec-op-logical-2",
  "level": "2",
  "url": "sec-operator.html#subsec-op-logical-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Toán tử logic "
},
{
  "id": "sec-operator-8-2",
  "level": "2",
  "url": "sec-operator.html#sec-operator-8-2",
  "type": "Video",
  "number": "8.4",
  "title": "Basic Programming — Part 8: Operators.",
  "body": " Basic Programming Part 8: Operators  Video phần 08   "
},
{
  "id": "sec-attribute",
  "level": "1",
  "url": "sec-attribute.html",
  "type": "Phần",
  "number": "9",
  "title": "Thuộc Tính",
  "body": " Thuộc Tính    Tìm hiểu thuộc tính và cách truy cập chúng.     Khái niệm thuộc tính    Thuộc tính là một biến có sẵn chứa thông tin miêu tả về một dữ liệu khác. Nói cách khác, nó là siêu dữ liệu.  Mỗi kiểu dữ liệu đều có một bộ thuộc tính của riêng nó.  Các thuộc tính của một dữ liệu sẽ tự động cập nhật khi dữ liệu đó được cập nhật.     Truy cập thuộc tính  Cú pháp truy cập thuộc tính      Để trình bày thuộc tính, ví dụ sau sử dụng một cấu trúc dữ liệu bên ngoài ma trận, được nhập vào từ thư viện Numpy (Bạn không cần hiểu rõ ví dụ này đâu.):   Có thể bạn sẽ hứng thú      Liên kết thư viện Python  \"what is a Python library\"      Liên kết Numpy  \"what is Numpy\"      Liên kết ma trận  \"what is a matrix\"         6 (2, 3)    Ví dụ code truy cập thuộc tính  Hàm np.matrix()    mat.size trả lại tổng số phần tử của ma trận mang tên mat .   mat.shape trả lại số hàng và số cột của ma trận.   Nhưng kiểu dữ liệu int không có các thuộc tính trên:    AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'size'    Ví dụ code thuộc tính không hợp lệ   Lỗi xuất hiện ở dòng 2, dịch nôm na ta được int không có thuộc tính size .        Basic Programming Part 9: Attributes  Video phần 09    "
},
{
  "id": "sec-attribute-2",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-2",
  "type": "Mục Tiêu",
  "number": "9",
  "title": "",
  "body": "  Tìm hiểu thuộc tính và cách truy cập chúng.   "
},
{
  "id": "def-attribute",
  "level": "2",
  "url": "sec-attribute.html#def-attribute",
  "type": "Khái Niệm",
  "number": "9.1",
  "title": "",
  "body": " Khái niệm thuộc tính    Thuộc tính là một biến có sẵn chứa thông tin miêu tả về một dữ liệu khác. Nói cách khác, nó là siêu dữ liệu.  Mỗi kiểu dữ liệu đều có một bộ thuộc tính của riêng nó.  Các thuộc tính của một dữ liệu sẽ tự động cập nhật khi dữ liệu đó được cập nhật.   "
},
{
  "id": "sec-attribute-4",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-4",
  "type": "Cú Pháp",
  "number": "9.2",
  "title": "Truy cập thuộc tính.",
  "body": " Truy cập thuộc tính  Cú pháp truy cập thuộc tính     "
},
{
  "id": "sec-attribute-8",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-8",
  "type": "Output",
  "number": "9.3",
  "title": "",
  "body": " 6 (2, 3)  "
},
{
  "id": "sec-attribute-9",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-9",
  "type": "Giải Thích",
  "number": "9.1",
  "title": "",
  "body": " Ví dụ code truy cập thuộc tính  Hàm np.matrix()    mat.size trả lại tổng số phần tử của ma trận mang tên mat .   mat.shape trả lại số hàng và số cột của ma trận.  "
},
{
  "id": "sec-attribute-12",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-12",
  "type": "Output",
  "number": "9.4",
  "title": "",
  "body": " AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'size'  "
},
{
  "id": "sec-attribute-13",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-13",
  "type": "Giải Thích",
  "number": "9.2",
  "title": "",
  "body": " Ví dụ code thuộc tính không hợp lệ   Lỗi xuất hiện ở dòng 2, dịch nôm na ta được int không có thuộc tính size .  "
},
{
  "id": "sec-attribute-15",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-15",
  "type": "Video",
  "number": "9.3",
  "title": "Basic Programming — Part 9: Attributes.",
  "body": " Basic Programming Part 9: Attributes  Video phần 09   "
},
{
  "id": "sec-function",
  "level": "1",
  "url": "sec-function.html",
  "type": "Phần",
  "number": "10",
  "title": "Hàm",
  "body": " Hàm    Tìm hiểu hàm và cách sử dụng chúng.    Ta lại gặp một khái niệm nữa rất thân thuộc trong toán học hàm . Và nó cũng đóng vai trò thiết yếu trong lập trình.  Giả sử ta có 100 biểu thức toán: Ta nhận ra chúng đều có dạng là đa thức bậc hai. Vậy, ta có thể rút gọn cách trình bày bằng hàm số như sau:   Đó cũng là cốt lõi của hàm trong lập trình.   Khái niệm hàm    Hàm là một đoạn code có thể tái sử dụng được dùng để thực hiện một tác vụ nào đó.  Hàm có thể nhận không, một, hay nhiều hơn dữ liệu đầu vào , còn được gọi là tham số .  Hàm có thể trả lại không, một, hay nhiều hơn dữ liệu đầu ra , còn được gọi là giá trị trả lại .  Thuật ngữ cho việc tạo ra một hàm mới là khai báo hàm .  Thuật ngữ cho việc sử dụng một hàm là gọi hàm .     Chú ý dùng hàm  Ở phần này, ta sẽ không đi sâu vào cú pháp khai báo hàm, mà chỉ tập trung vào việc sử dụng những hàm có sẵn hoặc được cung cấp bởi thư viện.  Để biết thêm về cú pháp khai báo hàm, tham khảo .    Gọi hàm  Cú pháp gọi hàm   Tùy vào cách một hàm được khai báo , ta có hai cách để gọi nó: hoặc    Một ví dụ thân thuộc là hàm print() . Nó có thể được gọi ở bất cứ nơi nào, và với một tập hợp các dữ liệu đầu vào bất kỳ. Và nó đưa dữ liệu ra terminal.    5 2 -2 1 Hello World! 5.5    Ví dụ code hàm print()  Hàm print()   Dòng 1: Ta gọi hàm print() với một dữ liệu đầu vào là 5 .  Dòng 2: Ta không truyền dữ liệu đầu vào, nên print() xuất ra terminal một dòng trắng.  Dòng 3: Ta cho nó hai dữ liệu đầu vào là 2 và -2 .  Dòng 4: Ta truyền cho nó nhiều dữ liệu đầu vào thuộc các kiểu dữ liệu khác nhau.   Một ví dụ nữa là hàm len() . Nó chấp nhận duy nhất một đầu vào là một cấu trúc dữ liệu và trả lại số phần tử.   Thí Nghiệm Vui  Does len() work with a string? len() có hoạt động với str không?     4    Ví dụ code hàm len()  Hàm len()  Hàm len() nhận một cấu trúc dữ liệu và trả lại số phần tử.   Vậy, hàm len() có nhiều yêu cầu hơn print() . Bạn phải gọi hàm này với duy nhất một giá trị đầu vào, và giá trị đó phải là một cấu trúc dữ liệu. Hai ví dụ sau sẽ xuất hiện lỗi:   Thí Nghiệm Vui  Sửa lỗi.     TypeError Cell In [1], line 3 ... TypeError: len() takes exactly one argument (2 given)    Ví dụ code hàm len()  Hàm len()   Hàm len() nhận chính xác một giá trị đầu vào, nhưng lại nhận được hai.   Ví dụ tiếp theo:    TypeError Cell In [1], line 2 ... TypeError: object of type 'int' has no len()    Ví dụ code hàm len()  Hàm len()   Đầu vào của len() phải là một cấu trúc dữ liệu, nhưng nó lại dược gọi với một int .   Ví dụ cuối cùng của ta là hàm upper() . Nó tuân theo cú pháp gọi hàm thứ hai, với đầu vào 1 là một chuỗi ký tự. Và nó trả lại một chuỗi mới với mọi ký tự được viết hoa.   Thí Nghiệm Vui  Đoán hàm có chức năng biến một chuỗi thành viết thường hết.     HELLO FRIEND!    Ví dụ code hàm upper()  Hàm upper()  Hàm upper() trả lại một chuỗi viết hoa mới.   Ví dụ xuất hiện lỗi:    AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'upper'    Ví dụ code hàm upper()  Hàm upper()   Hàm upper() chỉ nhận duy nhất một dữ liệu đầu vào có kiểu str , nhưng lại nhận được kiểu int .  Dịch nôm na miêu tả lỗi, ta được int không có thuộc tính upper .        Basic Programming Part 10: Functions  Video phần 10    "
},
{
  "id": "sec-function-2",
  "level": "2",
  "url": "sec-function.html#sec-function-2",
  "type": "Mục Tiêu",
  "number": "10",
  "title": "",
  "body": "  Tìm hiểu hàm và cách sử dụng chúng.   "
},
{
  "id": "sec-function-3",
  "level": "2",
  "url": "sec-function.html#sec-function-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hàm "
},
{
  "id": "sec-function-5",
  "level": "2",
  "url": "sec-function.html#sec-function-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hàm "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-function.html#def-function",
  "type": "Khái Niệm",
  "number": "10.1",
  "title": "",
  "body": " Khái niệm hàm    Hàm là một đoạn code có thể tái sử dụng được dùng để thực hiện một tác vụ nào đó.  Hàm có thể nhận không, một, hay nhiều hơn dữ liệu đầu vào , còn được gọi là tham số .  Hàm có thể trả lại không, một, hay nhiều hơn dữ liệu đầu ra , còn được gọi là giá trị trả lại .  Thuật ngữ cho việc tạo ra một hàm mới là khai báo hàm .  Thuật ngữ cho việc sử dụng một hàm là gọi hàm .   "
},
{
  "id": "sec-function-7",
  "level": "2",
  "url": "sec-function.html#sec-function-7",
  "type": "Chú Ý",
  "number": "10.2",
  "title": "",
  "body": " Chú ý dùng hàm  Ở phần này, ta sẽ không đi sâu vào cú pháp khai báo hàm, mà chỉ tập trung vào việc sử dụng những hàm có sẵn hoặc được cung cấp bởi thư viện.  Để biết thêm về cú pháp khai báo hàm, tham khảo .  "
},
{
  "id": "syntax-call-function",
  "level": "2",
  "url": "sec-function.html#syntax-call-function",
  "type": "Cú Pháp",
  "number": "10.3",
  "title": "Gọi hàm.",
  "body": " Gọi hàm  Cú pháp gọi hàm   Tùy vào cách một hàm được khai báo , ta có hai cách để gọi nó: hoặc   "
},
{
  "id": "sec-function-11",
  "level": "2",
  "url": "sec-function.html#sec-function-11",
  "type": "Output",
  "number": "10.4",
  "title": "",
  "body": " 5 2 -2 1 Hello World! 5.5  "
},
{
  "id": "sec-function-12",
  "level": "2",
  "url": "sec-function.html#sec-function-12",
  "type": "Giải Thích",
  "number": "10.1",
  "title": "",
  "body": " Ví dụ code hàm print()  Hàm print()   Dòng 1: Ta gọi hàm print() với một dữ liệu đầu vào là 5 .  Dòng 2: Ta không truyền dữ liệu đầu vào, nên print() xuất ra terminal một dòng trắng.  Dòng 3: Ta cho nó hai dữ liệu đầu vào là 2 và -2 .  Dòng 4: Ta truyền cho nó nhiều dữ liệu đầu vào thuộc các kiểu dữ liệu khác nhau.  "
},
{
  "id": "sec-function-16",
  "level": "2",
  "url": "sec-function.html#sec-function-16",
  "type": "Output",
  "number": "10.5",
  "title": "",
  "body": " 4  "
},
{
  "id": "sec-function-17",
  "level": "2",
  "url": "sec-function.html#sec-function-17",
  "type": "Giải Thích",
  "number": "10.2",
  "title": "",
  "body": " Ví dụ code hàm len()  Hàm len()  Hàm len() nhận một cấu trúc dữ liệu và trả lại số phần tử.  "
},
{
  "id": "sec-function-21",
  "level": "2",
  "url": "sec-function.html#sec-function-21",
  "type": "Output",
  "number": "10.6",
  "title": "",
  "body": " TypeError Cell In [1], line 3 ... TypeError: len() takes exactly one argument (2 given)  "
},
{
  "id": "sec-function-22",
  "level": "2",
  "url": "sec-function.html#sec-function-22",
  "type": "Giải Thích",
  "number": "10.3",
  "title": "",
  "body": " Ví dụ code hàm len()  Hàm len()   Hàm len() nhận chính xác một giá trị đầu vào, nhưng lại nhận được hai.  "
},
{
  "id": "sec-function-25",
  "level": "2",
  "url": "sec-function.html#sec-function-25",
  "type": "Output",
  "number": "10.7",
  "title": "",
  "body": " TypeError Cell In [1], line 2 ... TypeError: object of type 'int' has no len()  "
},
{
  "id": "sec-function-26",
  "level": "2",
  "url": "sec-function.html#sec-function-26",
  "type": "Giải Thích",
  "number": "10.4",
  "title": "",
  "body": " Ví dụ code hàm len()  Hàm len()   Đầu vào của len() phải là một cấu trúc dữ liệu, nhưng nó lại dược gọi với một int .  "
},
{
  "id": "sec-function-30",
  "level": "2",
  "url": "sec-function.html#sec-function-30",
  "type": "Output",
  "number": "10.8",
  "title": "",
  "body": " HELLO FRIEND!  "
},
{
  "id": "sec-function-31",
  "level": "2",
  "url": "sec-function.html#sec-function-31",
  "type": "Giải Thích",
  "number": "10.5",
  "title": "",
  "body": " Ví dụ code hàm upper()  Hàm upper()  Hàm upper() trả lại một chuỗi viết hoa mới.  "
},
{
  "id": "sec-function-34",
  "level": "2",
  "url": "sec-function.html#sec-function-34",
  "type": "Output",
  "number": "10.9",
  "title": "",
  "body": " AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'upper'  "
},
{
  "id": "sec-function-35",
  "level": "2",
  "url": "sec-function.html#sec-function-35",
  "type": "Giải Thích",
  "number": "10.6",
  "title": "",
  "body": " Ví dụ code hàm upper()  Hàm upper()   Hàm upper() chỉ nhận duy nhất một dữ liệu đầu vào có kiểu str , nhưng lại nhận được kiểu int .  Dịch nôm na miêu tả lỗi, ta được int không có thuộc tính upper .  "
},
{
  "id": "sec-function-37",
  "level": "2",
  "url": "sec-function.html#sec-function-37",
  "type": "Video",
  "number": "10.7",
  "title": "Basic Programming — Part 10: Functions.",
  "body": " Basic Programming Part 10: Functions  Video phần 10   "
},
{
  "id": "sec-error",
  "level": "1",
  "url": "sec-error.html",
  "type": "Phần",
  "number": "11",
  "title": "Lỗi",
  "body": " Lỗi    Learn about errors and ways to deal with them.     Congratulations! You have equipped yourself with quite a few programming fundamentals.  Before we continue, to improve your learning journey and experience, you should know how to deal with errors .   Khái quát lỗi  Errors, if any, will be shown in the terminal . Some additional pieces of information about an error are:   The line on which the error is spotted    The type of error    A description of the error        Below are some examples:     Cell In [1], line 3 print(\"This is another string.) ^ SyntaxError: unterminated string literal (detected at line 3)    Ví dụ code lỗi cú pháp   An error is spotted in line 3, which is of type SyntaxError .  Reading the description and taking another look at line 3, we can easily see that we are missing a quotation mark.   Another example:    TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'    Ví dụ code lỗi kiểu dữ liệu   An error of type TypeError is spotted at line 3.  The description simply means that addition between an integer and a string is unsupported.   The final example uses an external function from the library Numpy that simply calculates the square root.    TypeError Cell In [1], line 2 ... TypeError: ufunc 'sqrt' not supported for the input types, and the inputs could not be safely coerced to any supported types according to the casting rule ''safe''    Ví dụ code lỗi kiểu dữ liệu   An error of type TypeError is spotted at line 2.  The description might be long, but essentially it reads a string cannot be passed into the function sqrt .   But what should you do if you are even more confused after reading the terminal?    Cách Sửa Lỗi  There is no programmer, however skilled, who is able to memorize every potential error. It's totally normal for a senior programmer to look up errors on the Internet, even ones they've fixed before. Of course, the more errors they deal with, the more experience they accumulate.  Coming up are some of my personal experiences in fixing errors. You can try them out one after another:     Fix it In the case the error is easily understood, you can just fix it. Otherwise, we continue with the next step.     Search it on the Internet You can look it up by copy-pasting its description onto Google.   Chú ý tra cứu mạng  You should include the programming language being used as a keyword to increase efficiency, for instance, python unterminated string literal... .    Lưu ý tài liệu  You can refer to documentation in your language of choice. But it is commonly the case that English resources are the best in terms of availability and being up-to-date.   The majority of errors you might run into have already been solved by others. Thus, we can quickly read online posts and discussions and learn their solutions. Some of the most popular forums are Stack Overflow , Github , Stack Exchange , Reddit .  Here, if you run into another one, or if you are still unable to fix it, you can repeat the process, or proceed to step 3 respectively.     Describe it yourself It seems others' solutions don't apply to you when using the provided description. In that case, why don't you try to detail it using your own words? Describe what you are trying to achieve, with which data types, with which language, and maybe your suspicion of why the error occurs, Not working? Let's move to the next approach.     Use artificial intelligence (AI) If possible, you should try taking advantage of coding AIs such as ChatGPT or Github Copilot to fix errors. This is becoming an increasingly popular and effective approach.     Make a post When all other means have failed, it's time for you to request help from other human programmers. You can ask people you know or go onto online programming forums and compose a post detailing your problem.   Chú ý văn hóa mạng Make sure to study online etiquette to know how to behave appropriately when using such forums. Because you are looking for others' help, being respectful is vital.            Basic Programming Part 11: Errors & How To Fix Them  Video phần 11     "
},
{
  "id": "sec-error-2",
  "level": "2",
  "url": "sec-error.html#sec-error-2",
  "type": "Mục Tiêu",
  "number": "11",
  "title": "",
  "body": "  Learn about errors and ways to deal with them.   "
},
{
  "id": "sec-error-3-2",
  "level": "2",
  "url": "sec-error.html#sec-error-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "errors "
},
{
  "id": "sec-error-3-3",
  "level": "2",
  "url": "sec-error.html#sec-error-3-3",
  "type": "Chú Ý",
  "number": "11.1",
  "title": "",
  "body": " Khái quát lỗi  Errors, if any, will be shown in the terminal . Some additional pieces of information about an error are:   The line on which the error is spotted    The type of error    A description of the error        Below are some examples:  "
},
{
  "id": "sec-error-3-5",
  "level": "2",
  "url": "sec-error.html#sec-error-3-5",
  "type": "Output",
  "number": "11.2",
  "title": "",
  "body": " Cell In [1], line 3 print(\"This is another string.) ^ SyntaxError: unterminated string literal (detected at line 3)  "
},
{
  "id": "sec-error-3-6",
  "level": "2",
  "url": "sec-error.html#sec-error-3-6",
  "type": "Giải Thích",
  "number": "11.1",
  "title": "",
  "body": " Ví dụ code lỗi cú pháp   An error is spotted in line 3, which is of type SyntaxError .  Reading the description and taking another look at line 3, we can easily see that we are missing a quotation mark.  "
},
{
  "id": "sec-error-3-9",
  "level": "2",
  "url": "sec-error.html#sec-error-3-9",
  "type": "Output",
  "number": "11.3",
  "title": "",
  "body": " TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'  "
},
{
  "id": "sec-error-3-10",
  "level": "2",
  "url": "sec-error.html#sec-error-3-10",
  "type": "Giải Thích",
  "number": "11.2",
  "title": "",
  "body": " Ví dụ code lỗi kiểu dữ liệu   An error of type TypeError is spotted at line 3.  The description simply means that addition between an integer and a string is unsupported.  "
},
{
  "id": "sec-error-3-13",
  "level": "2",
  "url": "sec-error.html#sec-error-3-13",
  "type": "Output",
  "number": "11.4",
  "title": "",
  "body": " TypeError Cell In [1], line 2 ... TypeError: ufunc 'sqrt' not supported for the input types, and the inputs could not be safely coerced to any supported types according to the casting rule ''safe''  "
},
{
  "id": "sec-error-3-14",
  "level": "2",
  "url": "sec-error.html#sec-error-3-14",
  "type": "Giải Thích",
  "number": "11.3",
  "title": "",
  "body": " Ví dụ code lỗi kiểu dữ liệu   An error of type TypeError is spotted at line 2.  The description might be long, but essentially it reads a string cannot be passed into the function sqrt .  "
},
{
  "id": "subsec-fix-error-3",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fix it Search it on the Internet Stack Overflow Github Stack Exchange Reddit Describe it yourself Use artificial intelligence (AI) ChatGPT Github Copilot Make a post etiquette "
},
{
  "id": "sec-error-5-2",
  "level": "2",
  "url": "sec-error.html#sec-error-5-2",
  "type": "Video",
  "number": "11.4",
  "title": "Basic Programming — Part 11: Errors &amp; How To Fix Them.",
  "body": " Basic Programming Part 11: Errors & How To Fix Them  Video phần 11   "
},
{
  "id": "sec-personal-experience",
  "level": "1",
  "url": "sec-personal-experience.html",
  "type": "Phần",
  "number": "12",
  "title": "Kinh Nghiệm Cá Nhân",
  "body": " Kinh Nghiệm Cá Nhân    I'll bring up some insights and interesting topics that are worth knowing before you go into more advanced fundamentals.  This section is a bit longer than usual, so you don't have to read it all in one go. You can even skip the text and just watch the video.     Coming up are some of the many lessons I've learned throughout my journey as a programmer. Before we start, I'd like to have some words with you.  Honestly, if I could restart my journey as a programmer, I'd still do things all the same. It is thanks to the lessons I've learned from being inexperienced that I am who I am today. Others I learned by reading about people's mistakes on the Internet and avoiding making them, which is why I thought this section's a good idea.  If your first exposure to programming is this article, then it's likely that your starting mindset will be very different from mine, in a good way of course.  Truthfully though, I'd like you to make a lot of mistakes still, which is why I won't write about step-by-step guides on how to avoid them, but instead my personal opinions. This is actually how my parents raised me, for which I'm extremely grateful. Basically, they didn't keep me away from making mistakes, which would mean I wasn't learning anything. Instead, they taught me about self-reflection and how to get the most learning out of mistakes.  Okay then, I hope this section will be useful for you!    Start Simple  I think when I first got into programming, I cared too much about choosing a programming language to learn. My Youtube feed and recommendations always had those topics mentioned in . My inexperienced self would think those were important things to consider, and I'd watch every video that showed up to see people's opinions. But doing all that only made me scared of actually learning to code because I'd start asking myself questions like:   What if I learn the wrong language and it gets obsolete in the future?    What if language A is a better choice than language B a few years from now?    How long would it take me to master this language?        At one point, I learned to think in a different way. For instance, there's a period when I was very into game development, and it kinda went like this:   Okay. I wanna make a game, so I'm gonna look up game engines for beginners on Google.   After a few articles and videos, I ended up with Godot an open-source game engine that's been gaining popularity, has a big and supportive community, and sufficient documentation.   Okay, now do I wanna use GDScript (Godot's built-in language which has beginner-friendly syntax), or C# (supported by Godot for advanced customization which requires more skill).   Well, that question only took me 10 seconds to answer. I ain't about to learn C# to make no games.  After that, it was really just a constant cycle of studying online materials and experimenting with stuff.  Because I already had some ideas in mind, I got straight into making them and learning necessary concepts as I went, but never more than I needed. If I got stuck, it'd mean I had some online research to do. Otherwise, I was doing just fine with whatever knowledge I had, even if my solutions weren't the most effective or beautiful.  Personally, I think it's good that I did that instead of watching a 12-hour course covering every little thing about game development and making somebody else's idea.   Starting simple can also be applied to choosing a code editor or IDE (integrated development environment). I chose the Godot engine also because it comes with a built-in coding environment. Until now, I think I've tried 5 IDEs at most, and I've been sticking with VSCode for a while because, again, it's beginner-friendly.  The code cells provided in this article are very minimal and might be slightly inconvenient, but they're everything you need to start, aren't they?   You can choose a programming language and a code editor\/IDE by thinking simply. Start by coming up with a small and achievable idea and then look for suitable tools by asking the Internet.     The Tutorial Hell  The tutorial hell is something every programmer has experienced at least once in their life. It's when you are constantly watching videos and reading articles teaching you to do something, but you never actually sit down and type away at a computer.  The reason for this phenomenon could be a lack of motivation or ideas, procrastination, poor social media management, It's also because there's an abundance of online resources and contents about coding, which can be excessive sometimes.  Whenever this happens to me, I'd force myself to put down the phone and turn on my computer. Then I'd open up the browser and code editor and start looking for something very easy to do and also interesting enough. This whole process takes at most 5 minutes, but it always gets me to begin writing some code, whatever it may be about.   Just do something. You learn by doing, not by mindlessly consuming content.     Have Fun  Since stress and burn-outs are gonna be unavoidable sometimes, I think it's incredibly important to always have fun with the process. There are always annoying error messages showing up one after another, getting stuck while following step-by-step installation guides, understanding nothing about a new concept, and so on. And sometimes you're gonna feel as though you're not making any progress, so you doubt yourself and wonder if programming is not for you.  Honestly, these kinds of stress occur in every creative discipline and to everybody. Some days are good, some days are bad. So, why not just enjoy the process and have fun along the way?  Know that even if you think you're not making any progress, you definitely are. The author of Atomic Habits James Clear associates this feeling with the Value of Disappointment . Basically, your progress is not a linear line always going up that you can feel every day. Instead, it's more of an exponential curve that starts slow and gradually picks up the speed. Though there are days when you feel like it's not going anywhere, there are also days when something just clicks, and you're on a roll.  If you get stuck, maybe find a new simple goal and learn a new language? You've learned the fundamentals, which are applicable to most modern programming languages. So as you learn the 2nd, the 3rd language, and so on, you're discovering new possibilities, and your potential is only ever going up.   So long as you find joy in the process, you can always get back to it and do better than ever before.  If you keep learning and doing, you will improve without a doubt.     Be Open-Minded  There are always gonna be new interesting things to learn. So keep an open mind and be eager to learn them.  In coding communities, there are often these conventions and rules of thumb such as how to name variables, how to format code, how to organize files, So people learn them to improve efficiency and cooperation. And depending on the community, purpose, and choice of programming language, standards are gonna vary. Thus, you should be objective and neutral when entering new environments and meeting new people, since you have to learn their game.  As a beginner, only you will ever read your own code. So, it's good to create a good balance between learning good habits and having freedom. Basically, you should always try to improve your code, but also take it easy. There's no need to be able to produce beautiful or efficient code right off the bat, cause that'd be super stressful.  Experienced programmers often share best practices. These can be extremely beneficial to know about, but also harmful if overused without a good understanding. They are supposed to help you think critically and adapt quickly to different situations, not make you a close-minded coder who always does things the same way.   You should always be open to new ideas.  You should keep a balance between building good habits and trying new things.     Some Technical Pointers   I'll try my best to make this short and easy to understand.    Use A Simple Virtual Environment  Let's say you decide to install Python on your machine to make a game. So you do just that you download and install Python version 3.11.6 and Pygame (the Python library for making games). And everything works just fine.  Fast forward, now you wanna make some cool animations with Python. So you ask the Internet and Manim shows up. And you follow its installation guide and are very eager to get started. At one point, it says something along the lines of Manim needs Python version 3.12.1 to work... Not a problem? All you have to do is update Python and everything's good to go again.  However, when you go back to your Pygame projects, which were running just fine before, there are errors. Looking them up, you find out that Pygame doesn't work with Python version 3.12.1 yet. So do you downgrade Python to continue developing games at the expense of Manim, or do you forsake the games you've been so passionate about?  A worse case is when you accidentally install both versions of Python on your machine and have them run simultaneously. Now this is really gonna mess you and your PC up as conflicts upon conflicts show up.  So, a straightforward solution is to use a virtual environment, which prevents the not-so-hypothetical predicament above. It helps manage programming packages and dependencies on a per-environment basis, meaning you can have multiple environments unrelated to one another. Maybe one for game development, and one for animating?   Look for and use a simple virtual environment, which helps prevent conflicts between incompatible programming packages and dependencies.     Learn To Use Command-Line Interfaces  When the time comes for you to explore different languages and tools on your own, you will have to use command-line interfaces (CLIs) frequently. For the sake of simplicity, CLIs are just the lower-level counterparts of user interfaces (UI). On Windows, the two built-in CLIs are Command Prompt (CMD) and Windows PowerShell.  But don't worry, you don't have to take a course on this. You will gradually learn the common commands as you go. Detailed guides always have commands ready to be copy-pasted into your CLI and run with a press of the Enter key anyways.  Honestly, when I use PyPI (or PIP, which is a package manager for Python) all I know is how to install, update, and uninstall stuff. And I use the CMD for navigating files, switching between administration modes, and using virtual environments. That's it, nothing else really.  Finally, if errors show up when using CLIs, you just need to apply exactly what you've learned in the previous section.   As you explore on your own, you will naturally learn to use command-line interfaces.           Basic Programming Part 12: My Experiences  Video phần 12     "
},
{
  "id": "sec-personal-experience-2",
  "level": "2",
  "url": "sec-personal-experience.html#sec-personal-experience-2",
  "type": "Mục Tiêu",
  "number": "12",
  "title": "",
  "body": "  I'll bring up some insights and interesting topics that are worth knowing before you go into more advanced fundamentals.  This section is a bit longer than usual, so you don't have to read it all in one go. You can even skip the text and just watch the video.   "
},
{
  "id": "subsec-pe-start-simple-8",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-start-simple-8",
  "type": "TL;DR",
  "number": "12.1",
  "title": "",
  "body": " You can choose a programming language and a code editor\/IDE by thinking simply. Start by coming up with a small and achievable idea and then look for suitable tools by asking the Internet.  "
},
{
  "id": "subsec-pe-tutorial-hell-5",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-tutorial-hell-5",
  "type": "TL;DR",
  "number": "12.2",
  "title": "",
  "body": " Just do something. You learn by doing, not by mindlessly consuming content.  "
},
{
  "id": "subsec-pe-have-fun-4",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-have-fun-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Value of Disappointment "
},
{
  "id": "subsec-pe-have-fun-6",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-have-fun-6",
  "type": "TL;DR",
  "number": "12.3",
  "title": "",
  "body": " So long as you find joy in the process, you can always get back to it and do better than ever before.  If you keep learning and doing, you will improve without a doubt.  "
},
{
  "id": "subsec-pe-open-minded-6",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-open-minded-6",
  "type": "TL;DR",
  "number": "12.4",
  "title": "",
  "body": " You should always be open to new ideas.  You should keep a balance between building good habits and trying new things.  "
},
{
  "id": "subsubsec-pe-virtual-environment-7",
  "level": "2",
  "url": "sec-personal-experience.html#subsubsec-pe-virtual-environment-7",
  "type": "TL;DR",
  "number": "12.5",
  "title": "",
  "body": " Look for and use a simple virtual environment, which helps prevent conflicts between incompatible programming packages and dependencies.  "
},
{
  "id": "subsubsec-pe-cli-6",
  "level": "2",
  "url": "sec-personal-experience.html#subsubsec-pe-cli-6",
  "type": "TL;DR",
  "number": "12.6",
  "title": "",
  "body": " As you explore on your own, you will naturally learn to use command-line interfaces.  "
},
{
  "id": "sec-personal-experience-9-2",
  "level": "2",
  "url": "sec-personal-experience.html#sec-personal-experience-9-2",
  "type": "Video",
  "number": "12.1",
  "title": "Basic Programming — Part 12: My Experiences.",
  "body": " Basic Programming Part 12: My Experiences  Video phần 12   "
},
{
  "id": "sec-conditional",
  "level": "1",
  "url": "sec-conditional.html",
  "type": "Phần",
  "number": "13",
  "title": "Câu Lệnh Điều Kiện",
  "body": " Câu Lệnh Điều Kiện        Coming soon.  "
},
{
  "id": "sec-conditional-2",
  "level": "2",
  "url": "sec-conditional.html#sec-conditional-2",
  "type": "Mục Tiêu",
  "number": "13",
  "title": "",
  "body": "     "
},
{
  "id": "sec-loop",
  "level": "1",
  "url": "sec-loop.html",
  "type": "Phần",
  "number": "14",
  "title": "Vòng Lặp",
  "body": " Vòng Lặp        Coming soon.  "
},
{
  "id": "sec-loop-2",
  "level": "2",
  "url": "sec-loop.html#sec-loop-2",
  "type": "Mục Tiêu",
  "number": "14",
  "title": "",
  "body": "     "
},
{
  "id": "sec-scope",
  "level": "1",
  "url": "sec-scope.html",
  "type": "Phần",
  "number": "15",
  "title": "Phạm Vi",
  "body": " Phạm Vi        Coming soon.  "
},
{
  "id": "sec-scope-2",
  "level": "2",
  "url": "sec-scope.html#sec-scope-2",
  "type": "Mục Tiêu",
  "number": "15",
  "title": "",
  "body": "     "
},
{
  "id": "sec-declare-function",
  "level": "1",
  "url": "sec-declare-function.html",
  "type": "Phần",
  "number": "16",
  "title": "Khai Báo Hàm",
  "body": " Khai Báo Hàm        Coming soon.  "
},
{
  "id": "sec-declare-function-2",
  "level": "2",
  "url": "sec-declare-function.html#sec-declare-function-2",
  "type": "Mục Tiêu",
  "number": "16",
  "title": "",
  "body": "     "
},
{
  "id": "sec-class",
  "level": "1",
  "url": "sec-class.html",
  "type": "Phần",
  "number": "17",
  "title": "Lớp",
  "body": " Lớp        Coming soon.  "
},
{
  "id": "sec-class-2",
  "level": "2",
  "url": "sec-class.html#sec-class-2",
  "type": "Mục Tiêu",
  "number": "17",
  "title": "",
  "body": "     "
},
{
  "id": "sec-using-list",
  "level": "1",
  "url": "sec-using-list.html",
  "type": "Phần",
  "number": "18",
  "title": "Sử Dụng Danh Sách",
  "body": " Sử Dụng Danh Sách        Coming soon.  "
},
{
  "id": "sec-using-list-2",
  "level": "2",
  "url": "sec-using-list.html#sec-using-list-2",
  "type": "Mục Tiêu",
  "number": "18",
  "title": "",
  "body": "     "
},
{
  "id": "sec-using-dictionary",
  "level": "1",
  "url": "sec-using-dictionary.html",
  "type": "Phần",
  "number": "19",
  "title": "Sử Dụng Từ Điển",
  "body": " Sử Dụng Từ Điển        Coming soon.  "
},
{
  "id": "sec-using-dictionary-2",
  "level": "2",
  "url": "sec-using-dictionary.html#sec-using-dictionary-2",
  "type": "Mục Tiêu",
  "number": "19",
  "title": "",
  "body": "     "
},
{
  "id": "appendix-playground",
  "level": "1",
  "url": "appendix-playground.html",
  "type": "Phụ Lục",
  "number": "A",
  "title": "Sân Chơi",
  "body": " Sân Chơi   Nhờ PreTeXt , phụ lục này giúp bạn thử nghiệm với một vài ngôn ngữ lập trình. Qua đó, bạn sẽ có một cái nhìn tốt hơn về ý tưởng rằng dù cú pháp của các ngôn ngữ có thể hơi, hoặc rất, khác nhau, thì các khái niệm cốt lõi vẫn luôn hiện hữu .  Một cách thú vị để thử một ngôn ngữ là tra mạng những ví dụ code, ví dụ như python code examples . Ngày nay, có rất nhiều trang web tích hợp môi trường lập trình và biên dịch. Bạn có thể dùng chúng, hoặc bạn cũng có thể sao chép và dán chúng vào đây để chạy.    Python  Python là một trong những ngôn ngữ lập trình hiện đại phổ biến nhất. Nó là một ngôn ngữ bậc cao và đa mục đích.   Liên kết ví dụ Python  Search for Python code examples.    Dưới đây là một môi trường Python phức tạp hơn một tí. Thanh kéo cho phép bạn làm việc với các phiên bản khác nhau của code qua những lần chỉnh sửa. Và nút CodeLens kích hoạt một phần mềm cho phép bạn chạy code từng bước một, giúp bạn theo dõi các dữ liệu thay đổi.   # This is a Python cell # Write and run your Python code here print(\"Hello world!\")     Javascript  Hầu hết mọi trang web hiện đại đều có mã Javascript. Tác dụng chính của nó là cung cấp tính tương tác cho trang web.   Liên kết ví dụ Javascript  Search for Javascript code examples.    \/\/ This is a Javascript cell \/\/ Write and run your Javascript code here alert(\"Hello world!\");    Output của code Javascript có thể sẽ không xuất hiện ở dưới. Thay vào đó, hãy mở bảng Element Inspect bằng cách chuột phải trên trang web và chọn Inspect . Sau đó, mở tab Console . Khi chạy Javascript thì output sẽ xuất hiện ở đó.     HTML  Về mặt kỹ thuật, HTML (HyperText Markup Language) không phải là một ngôn ngữ lập trình, mà là một ngôn ngữ đánh dấu . Mặc vậy, việc thí nghiệm với HTML, hoặc các ngôn ngữ đánh dấu khác, có nhiều lợi ích, đặc biệt đối với người mới bắt đầu. (P.S. Article này được viết bằng PreTeXt , một ngôn ngữ đánh dấu.)   Có thể bạn sẽ hứng thú   Liên kết ngôn ngữ đánh dấu  \"what is a markup language\"     Liên kết ví dụ HTML  Search for HTML code examples.      Sage  Sage là một phần của SageMath, một hệ thống phần mềm toán học mã nguồn mở. Nó được phát triển dựa trên Python, nên phần lớn cú pháp của chúng giống nhau.   Liên kết ví dụ SageMath  Search for SageMath code examples.     "
},
{
  "id": "subsec-javascript-play-5",
  "level": "2",
  "url": "appendix-playground.html#subsec-javascript-play-5",
  "type": "Chú Ý",
  "number": "A.1",
  "title": "",
  "body": " Output của code Javascript có thể sẽ không xuất hiện ở dưới. Thay vào đó, hãy mở bảng Element Inspect bằng cách chuột phải trên trang web và chọn Inspect . Sau đó, mở tab Console . Khi chạy Javascript thì output sẽ xuất hiện ở đó.  "
},
{
  "id": "subsec-html-play-2",
  "level": "2",
  "url": "appendix-playground.html#subsec-html-play-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ngôn ngữ đánh dấu "
},
{
  "id": "appendix-whats-next",
  "level": "1",
  "url": "appendix-whats-next.html",
  "type": "Phụ Lục",
  "number": "B",
  "title": "Tiếp Tục Hành Trình",
  "body": " Tiếp Tục Hành Trình   Coming soon.  "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Phụ Lục",
  "number": "C",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:  Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Đề Mục",
  "body": " Đề Mục   "
},
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Được viết bằng PreTeXt . Được triển khai bằng Github Pages.  Ngôn ngữ:   English   Tiếng Việt    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
