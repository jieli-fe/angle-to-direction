var convert = (angle, param) => Math.ceil(((angle + param / 16) % param) / (param / 8));

var directionName={
    1: ['N','North','北'],
    2: ['NE','North East','东北'],
    3: ['E','East','东'],
    4: ['SE','South East','东南'],
    5: ['S','South','南'],
    6: ['SW','South West','西南'],
    7: ['W','West','西'],
    8: ['NW','North West','西北'],
}

var angleToDirection = {
    degree: (deg) => directionName[convert(deg, 360)][0],
    degreeAbbr: (deg) => directionName[convert(deg, 360)][1],
    degreeCn: (deg) => directionName[convert(deg, 360)][2],
    radian: (rad) => directionName[convert(rad, Math.PI * 2)][0],
    radianAbbr: (rad) => directionName[convert(rad, Math.PI * 2)][1],
    radianCn: (rad) => directionName[convert(rad, Math.PI * 2)][2]
};

module.exports = angleToDirection;