// 1

const fs = require('node:fs')

const fd = fs.openSync('data.txt', 'w')

fs.writeSync(fd, "Hello, this is the first line.\n")
fs.writeSync(fd, "This is the second line.\n")

fs.closeSync(fd)

// 2 

const fd1 = fs.openSync('data.txt', 'r')

const buffer_64 = Buffer.alloc(64)

fs.readSync(fd1, buffer_64, 0, buffer_64.length, 0)

console.log(buffer_64.toString('utf-8'))

// 3 

const fd2 = fs.openSync('data.txt', 'r')
const fd3 = fs.openSync('copy.txt', 'w')

const buffer_16 = Buffer.alloc(16)

let bytesCount = 0, position = 0

while((bytes = fs.readSync(fd2, buffer_16, 0, buffer_16.length, position)) > 0) {
    fs.writeSync(fd3, buffer_16, 0, bytes)
    position += bytesCount
}

fs.closeSync(fd2)
fs.closeSync(fd3)


// 4

const fd4 = fs.openSync('example.txt', 'w+')

fs.writeSync(fd4, '0123456789')
fs.writeSync(fd4, 'AB', 5, 'utf-8', 5)

const buffer = Buffer.alloc(64)

const bytes = fs.readSync(fd4, buffer, 0, buffer.length, 0)

console.log(buffer.toString('utf-8', 0, bytes))

fs.closeSync(fd4)


// 5 

const fd5 = fs.openSync('data.txt', 'r')


const stats = fs.fstatSync(fd5)
const fileLength = stats.size

const middlePosition = Math.floor(fileLength / 2)

const buffer_10 = Buffer.alloc(10)
fs.readSync(fd5, buffer_10, 0, buffer_10.length, middlePosition)


console.log(buffer_10.toString('utf-8'))

fs.closeSync(fd5)


// 6 

fs.writeFileSync('file1.txt',  'Content of the first file.\n')
fs.writeFileSync('file2.txt', 'Content of the second file.\n')

const fd6 = fs.openSync('merged.txt', 'w')
const file1 = fs.readFileSync('file1.txt')
const file2 = fs.readFileSync('file2.txt')

fs.writeSync(fd6, file1)
fs.writeSync(fd6, file2)

fs.closeSync(fd6)

console.log('Success!!')

// 7

  fs.writeFileSync('message.txt', 'Hello World!')

  const data = fs.readFileSync(path)

  const content = data.toString();
  const updatedContent = content.replace('Hello', 'Hello Awesome')

  const newBuffer = Buffer.from(updatedContent);

  fs.writeFileSync(path, newBuffer);

  console.log(updatedContent);