import styled from '@emotion/styled'
import * as tmImage from '@teachablemachine/image'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button as SemanticButton } from 'semantic-ui-react'

import { Product } from '@/shared/types'

const Container = styled.div`
  width: 100%;
  height: 329.4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SelectedImage = styled.div`
  width: 50%;
  height: 100%;
  min-height: 250px;
  border-radius: 10px;
  border: 3px dashed LightGray;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
const ResultContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & > :first-child {
    font-size: 18px;
    font-weight: bold;
  }

  & > :nth-child(2) {
    font-size: 15px;
  }

  img {
    width: 120px;
    height: 120px;
  }

  Button {
    width: 100%;
  }
`
const Link = styled(RouterLink)`
  width: 100%;

  Button {
    width: 100%;
  }
`

const Button = styled(SemanticButton)`
  width: 40%;
`

const predictionProducts: Product[] = [
  {
    id: 10082,
    name: '페리페라 잉크더에어리벨벳AD - 미모열일',
    brand: '페리페라',
    color: '#F45178',
    price: '9000',
    image:
      'https://mimg.lalavla.com/resources/images/prdimg/20210811/10003613/10003613_B_003_360.jpg',
    detailImage:
      '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>',
  },
  {
    id: 10268,
    name: '삐아 네버다이 틴트 (3호 행동파)',
    brand: '삐아',
    color: '#8C0F1E',
    price: '9000',
    image:
      'https://mimg.lalavla.com/resources/images/prdimg/20201116/10006393/10006393_D_001_360.jpg',
    detailImage:
      '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>',
  },
  {
    id: 12796,
    name: '롬앤 제로 벨벳 틴트(22호 그레인누드)',
    brand: '롬앤',
    color: '#BC6657',
    price: '9900',
    image:
      'https://mimg.lalavla.com/resources/images/prdimg/20190827/10002543/10002543_D_002_360.png',
    detailImage:
      '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>',
  },
  {
    id: 10424,
    name: '메이블린뉴욕 슈퍼 스테이 립 크레용(40호 래프라우더)',
    brand: '메이블린',
    color: '#BE6382',
    price: '14000',
    image:
      'https://mimg.lalavla.com/resources/images/prdimg/20210401/10005809/10005809_D_002_360.jpg',
    detailImage:
      '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>',
  },
]

function UploadImage() {
  const [uploadImage, setUploadImage] = useState<string>()
  const [product, setProduct] = useState<Product>()
  const [model, setModel] = useState<tmImage.CustomMobileNet>()

  const inputRef = useRef<HTMLInputElement>(null)
  const uploadImageRef = useRef<HTMLImageElement>(null)

  const handleButtonOnClick = React.useCallback(() => {
    if (!inputRef.current) {
      return
    }

    inputRef.current.click()
  }, [])

  const handlefileChange = React.useCallback(
    //async
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files

      if (!files) {
        return
      }

      const file = files[0]

      // const formData = new FormData()
      // formData.append('file', file)
      // axios
      //   .post('api/uploadfile', formData)
      //   .then((res) => {setUploadImage()})
      //   .catch((err) => {
      //     console.log(err)
      //   })

      setUploadImage(URL.createObjectURL(file))
    },
    [],
  )

  const predictProduct = async () => {
    try {
      if (uploadImageRef.current && model) {
        const predictions = await model.predict(uploadImageRef.current, false)
        const maxPrediction = predictions.reduce((prev, current) => {
          return prev.probability > current.probability ? prev : current
        })

        const index = predictions.indexOf(maxPrediction)
        setProduct(predictionProducts[index])
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const initModel = async () => {
      const url = 'https://teachablemachine.withgoogle.com/models/l6jBBorzq/'
      const modelURL = url + 'model.json'
      const metadataURL = url + 'metadata.json'

      try {
        setModel(await tmImage.load(modelURL, metadataURL))
      } catch (e) {
        console.log(e)
      }
    }

    initModel()
  }, [])

  useEffect(() => {
    if (uploadImage) {
      predictProduct()
    }
  }, [uploadImage])

  return (
    <Container>
      <SelectedImage>
        {uploadImage ? (
          <img ref={uploadImageRef} src={uploadImage} />
        ) : (
          '선택된 이미지가 없습니다.'
        )}
      </SelectedImage>
      {product ? (
        <ResultContainer>
          <span>인공지능이 찾은 결과</span>
          <span>{product.name}</span>
          <img src={product.image} />
          <Link
            to={{
              pathname: `/detail/${product.name}`,
              state: product,
            }}
          >
            <Button color="black" content="더 알아보기" />
          </Link>
        </ResultContainer>
      ) : (
        <Button
          color="black"
          content="이미지 업로드"
          onClick={handleButtonOnClick}
        />
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpg, image/jpeg"
        hidden
        onChange={handlefileChange}
      />
    </Container>
  )
}

export default UploadImage
