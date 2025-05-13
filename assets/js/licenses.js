// License data with attributes for filtering
const licenses = [
  {
      id: "mit",
      name: "MIT License",
      description: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices.",
      attributes: {
          simple: true,
          patent: false,
          permissive: true,
          copyleft: false,
          popular: true,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: false },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: false }
      ],
      text: `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
      id: "apache2",
      name: "Apache License 2.0",
      description: "A permissive license with patent protection that requires preservation of copyright and license notices.",
      attributes: {
          simple: false,
          patent: true,
          permissive: true,
          copyleft: false,
          popular: true,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: true },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: false }
      ],
      text: `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction,
and distribution as defined by Sections 1 through 9 of this document.

...

[Full license text would be included in actual implementation]`
  },
  {
      id: "gpl3",
      name: "GNU General Public License v3.0",
      description: "A strong copyleft license that requires distributors to make the source available. Includes patent protection.",
      attributes: {
          simple: false,
          patent: true,
          permissive: false,
          copyleft: true,
          popular: true,
          compatibility: false
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: true },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: true }
      ],
      text: `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

...

[Full license text would be included in actual implementation]`
  },
  {
      id: "bsd3",
      name: "BSD 3-Clause License",
      description: "A permissive license similar to the BSD 2-Clause License, but with a 3rd clause prohibiting others from using the name of the copyright holder or contributors to promote derivatives.",
      attributes: {
          simple: true,
          patent: false,
          permissive: true,
          copyleft: false,
          popular: true,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: false },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: false }
      ],
      text: `BSD 3-Clause License

Copyright (c) [year], [fullname]
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
 contributors may be used to endorse or promote products derived from
 this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  },
  {
      id: "mpl2",
      name: "Mozilla Public License 2.0",
      description: "A weak copyleft license that allows integration with proprietary software. Includes patent protection.",
      attributes: {
          simple: false,
          patent: true,
          permissive: false,
          copyleft: true,
          popular: true,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: true },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: false }
      ],
      text: `Mozilla Public License Version 2.0
==================================

1. Definitions
--------------

...

[Full license text would be included in actual implementation]`
  },
  {
      id: "isc",
      name: "ISC License",
      description: "A permissive license functionally equivalent to the BSD 2-Clause and MIT licenses, but with simpler language.",
      attributes: {
          simple: true,
          patent: false,
          permissive: true,
          copyleft: false,
          popular: false,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: false },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: false }
      ],
      text: `ISC License

Copyright (c) [year], [fullname]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
  },
  {
      id: "lgpl3",
      name: "GNU Lesser General Public License v3.0",
      description: "A copyleft license that allows linking with non-free programs. Includes patent protection.",
      attributes: {
          simple: false,
          patent: true,
          permissive: false,
          copyleft: true,
          popular: true,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: true },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: true },
          { name: "Requires copyright notice", value: true },
          { name: "Requires share alike", value: true }
      ],
      text: `GNU LESSER GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

...

[Full license text would be included in actual implementation]`
  },
  {
      id: "unlicense",
      name: "The Unlicense",
      description: "A license with no conditions whatsoever which dedicates works to the public domain.",
      attributes: {
          simple: true,
          patent: false,
          permissive: true,
          copyleft: false,
          popular: false,
          compatibility: true
      },
      features: [
          { name: "Commercial use", value: true },
          { name: "Modification", value: true },
          { name: "Distribution", value: true },
          { name: "Private use", value: true },
          { name: "Patent grant", value: false },
          { name: "Trademark grant", value: false },
          { name: "Liability limitations", value: true },
          { name: "Requires attribution", value: false },
          { name: "Requires copyright notice", value: false },
          { name: "Requires share alike", value: false }
      ],
      text: `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`
  }
];