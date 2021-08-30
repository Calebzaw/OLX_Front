import styled from "styled-components";

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .box{
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }

    .box-padding {
        padding: 10px;
    }

    .leftSide{
        flex: 1;
        margin-right: 20px;

        .box{
            display: flex;
        }

        .adImg {
            width: 320px;
            height: 320px;
            display: block !important;

            .each-slide img {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }

        .adInfo{
            flex: 1;
            margin-left: 20px;
            .adName {
                margin-bottom: 20px;

                h2 {
                    margin: 0;
                    margin-top: 20px;
                }
                small {
                    color: #999;
                }
            }

            .adDescription {


                small {
                    color:#999;
                }
            }
        }
    }

    .rightSide{
        width: 250px;

        .price span {
            color: #00F;
            display: block;
            font-size: 27px;
            font-weight: bold;
        }

        .contactSeller{
            background-color: #00F;
            color: #FFF;
            height: 30px;
            border-radius: 5px;
            box-shadow: 0px 0px 4px #999;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-bottom: 20px;
        }

        .created-by strong{
            display: block;
        }

        .created-by small{
            display: block;
            color: #999;
            margin-top: 10px;
        }
    }

    @media (max-width: 600px){
        flex-direction: column;

        .leftSide {
            margin:0;

            .box {
                margin: auto;
                width: 320px;
                flex-direction: column;
            }

            .adInfo {
                padding: 10px;
            }
        }

        .rightSide{
            width: auto;
            margin-top: 20px;

            .box{
                width: 320px;
                margin: auto;
            }

            .contactSeller{
                width: 320px;
                margin: 20px auto;
            }
        }
    }
`;

export const OthersArea = styled.div`

    h2 {
        font-size: 20px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;

        .aditem {
            width: 25%;
        }

    }

    @media (max-width:600px){
        margin: 10px;

        .list .aditem {
            width: 50%;
        }

    }
`;

export const BreadCrumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a {
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
        color: #000;
    }

    @media (max-width:600px){
        margin: 20px;
    }
`;