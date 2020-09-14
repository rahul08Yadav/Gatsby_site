import { functions, isEqual, omit } from 'lodash'
import React, { useState, useEffect, useRef } from 'react'
function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef()
  const [map, setMap] = useState()
  useEffect(() => {
    // The Google Maps API modifies the options object passed to
    // the Map constructor in place by adding a mapTypeId with default
    // value 'roadmap'. { ...options } prevents this by creating a copy.
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, { ...options }))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
      `api_key`
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  if (map && typeof onMount === `function`) onMount(map, onMountProps)
  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}
const link = {
  coords: { lat: 17.418153, lng: 78.458165 }, // required: latitude & longitude at which to display the marker
  title: `Life, the Universe and Everything`, // optional
  url: `https://wikipedia.org/wiki/Life,_the_Universe_and_Everything`, // optional
}
function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
  return noPropChange && noFuncChange
}
function addMarkers(map, links) {
  links.forEach((link, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: { lat: 17.418153, lng: 78.458165 },
      label: `${index + 1}`,
      title: link.title,
    })

    marker.addListener(`click`, () => {
      window.location.href = link.url
    })
  })
}


export default React.memo(Map, shouldNotUpdate)
Map.defaultProps = {
  options: {
    center: { lat: 17.418153 , lng: 78.458165 },
    zoom: 10,
    onMount: addMarkers,

  },
}
