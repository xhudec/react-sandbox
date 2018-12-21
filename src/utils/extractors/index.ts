import set from 'lodash/set'
import get from 'lodash/get'

export type Path = (string | number)[]
export type TransformationTuple = [Path, Path, any?]

export interface IExtractInput {
  paths: TransformationTuple[]
  source: any
}

const extract = ({ paths, source }: IExtractInput): object => {
  const extractedResult = {}

  paths.forEach(([left, right, defaultValue = null]) => {
    set(extractedResult, right.length ? right : left, get(source, left, defaultValue))
  })

  return extractedResult
}

export default extract
